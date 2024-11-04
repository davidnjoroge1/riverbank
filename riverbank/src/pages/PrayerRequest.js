import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader } from 'lucide-react';

const PrayerRequest = () => {
  const [request, setRequest] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('recent');
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  // Fetch requests based on filter
  useEffect(() => {
    const fetchRequests = () => {
      let q;
      const prayerRequestsRef = collection(db, 'prayerRequests');
      
      if (filter === '24hrs') {
        const last24Hours = new Date();
        last24Hours.setDate(last24Hours.getDate() - 1);
        q = query(
          prayerRequestsRef,
          where('createdAt', '>=', last24Hours),
          orderBy('createdAt', 'desc')
        );
      } else {
        q = query(
          prayerRequestsRef,
          orderBy('createdAt', filter === 'recent' ? 'desc' : 'asc')
        );
      }

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRequests(requestsData);
        setLoading(false);
      }, (err) => {
        console.error("Error fetching requests: ", err);
        setError("Failed to load prayer requests");
        setLoading(false);
      });

      return unsubscribe;
    };

    fetchRequests();
  }, [filter]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addDoc(collection(db, 'prayerRequests'), {
        request,
        createdAt: new Date(),
      });
      setRequest(''); // Clear the input after submission
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to submit prayer request');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmationOk = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', color: '#f0f0f0' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '10px', color: '#e0e0e0' }}>Prayer requests</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Enter your prayer request here"
          required
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #555',
            marginBottom: '10px',
            resize: 'vertical',
            minHeight: '80px',
            fontSize: '1em',
            color: '#f0f0f0',
            backgroundColor: '#333',
            boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.1)',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#4CAF50';
            e.target.style.boxShadow = '0 0 5px rgba(76, 175, 80, 0.5)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#555';
            e.target.style.boxShadow = 'none';
          }}
        />
        <button 
          type="submit" 
          style={{
            padding: '12px 25px',
            borderRadius: '5px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            fontSize: '1em',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'blue'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#blue'}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          disabled={loading}
        >
          {loading ? (
            <Loader className="animate-spin h-5 w-5 mr-3" />
          ) : (
            'Submit Prayer Request'
          )}
        </button>
      </form>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: '#e0e0e0' }}>Filter by: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#444', color: '#f0f0f0', border: '1px solid #555' }}
          disabled={loading}
        >
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
          <option value="24hrs">Last 24 Hours</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin h-8 w-8 text-gray-400" />
          <span className="ml-4 text-gray-400">Loading prayer requests...</span>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64 text-red-500">{error}</div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '10px',
          }}
        >
          {requests.map((req) => (
            <div
              key={req.id}
              style={{
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#2a2a2a',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
                fontSize: '0.9em',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                hyphens: 'auto',
                border: '1px solid #555',
                color: '#f0f0f0'
              }}
            >
              <p>{req.request}</p>
              <p style={{ fontSize: '0.75em', color: '#ccc' }}>
                {new Date(req.createdAt.seconds * 1000).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {showConfirmation && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1a1a1a',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            animation: 'glowGreen 1s infinite',
          }}
        >
          <CheckCircle color="#4CAF50" size={48} style={{ marginBottom: '10px' }} />
          <h3 style={{ color: '#4CAF50' }}>Prayer Request Submitted!</h3>
          <p>Give a testimony in church when your prayer is answered.</p>
          <button
            type="button"
            onClick={handleConfirmationOk}
            style={{
              padding: '12px 25px',
              borderRadius: '5px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              fontSize: '1em',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
          >
            Okay
          </button>
        </div>
      )}
    </div>
  );
};

export default PrayerRequest;