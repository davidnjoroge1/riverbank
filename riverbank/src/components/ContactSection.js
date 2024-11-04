import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

const PrayerRequests = () => {
  // In a real application, this would fetch from a database
  const [requests, setRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newRequest, setNewRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRequest.trim()) {
      const timestamp = new Date().toISOString();
      setRequests([
        { id: timestamp, text: newRequest.trim(), date: timestamp },
        ...requests
      ]);
      setNewRequest('');
      setShowForm(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Simple Plus Icon Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>

      {/* Conditional Form Display */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newRequest}
            onChange={(e) => setNewRequest(e.target.value)}
            placeholder="Share your prayer request here..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Prayer Requests List */}
      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-lg shadow p-4"
          >
            <span className="text-sm text-gray-500 block mb-2">
              {formatDate(request.date)}
            </span>
            <p className="text-gray-700">{request.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerRequests;