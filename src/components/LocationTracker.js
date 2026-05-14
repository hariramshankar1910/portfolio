import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

export default function LocationTracker() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Point to the exact same path: users/user1
    const locationRef = ref(db, 'users/user1');
    
    // onValue listens for real-time changes
    const unsubscribe = onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setLocation({
          lat: data.latitude,
          lng: data.longitude,
          time: new Date(data.timestamp).toLocaleTimeString()
        });
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', margin: '20px 0', backgroundColor: '#f8f9fa', color: '#000' }}>
      <h3>Portfolio (Receiver) 🗺️</h3>
      {location ? (
        <div>
          <p><strong>Latitude:</strong> {location.lat}</p>
          <p><strong>Longitude:</strong> {location.lng}</p>
          <p><strong>Last Updated:</strong> {location.time}</p>
        </div>
      ) : (
        <p>Waiting for live location...</p>
      )}
    </div>
  );
}
