// Import necessary packages and Firebase functions
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

const PrayerRequests = () => {
    // State to hold prayer requests
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [newRequest, setNewRequest] = useState("");

    // Fetch prayer requests from Firestore
    useEffect(() => {
        const fetchPrayerRequests = async () => {
            const requestsCollection = collection(db, "prayerRequests");
            const requestSnapshot = await getDocs(requestsCollection);
            const requestsList = requestSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPrayerRequests(requestsList);
        };

        fetchPrayerRequests();
    }, []);

    // Add new prayer request to Firestore
    const handleAddRequest = async (e) => {
        e.preventDefault();
        if (newRequest.trim()) {
            await addDoc(collection(db, "prayerRequests"), {
                text: newRequest,
                timestamp: serverTimestamp()
            });
            setNewRequest(""); // Clear the input field
            // Fetch the updated list of prayer requests
            const requestsCollection = collection(db, "prayerRequests");
            const requestSnapshot = await getDocs(requestsCollection);
            const requestsList = requestSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPrayerRequests(requestsList);
        }
    };

    return (
        <div className="prayer-requests-container">
            <h2>Prayer Requests</h2>

            {/* Form to submit new prayer request */}
            <form onSubmit={handleAddRequest} className="request-form">
                <input
                    type="text"
                    placeholder="Write your prayer request here..."
                    value={newRequest}
                    onChange={(e) => setNewRequest(e.target.value)}
                    className="request-input"
                    required
                />
                <button type="submit" className="submit-btn">Post</button>
            </form>

            {/* Display prayer requests */}
            <div className="requests-list">
                {prayerRequests.sort((a, b) => b.timestamp - a.timestamp).map((request) => (
                    <div key={request.id} className="request-item">
                        <p>{request.text}</p>
                        <span>{request.timestamp?.toDate().toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrayerRequests;
