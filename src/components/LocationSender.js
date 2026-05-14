import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { ref, set } from 'firebase/database';

export default function LocationSender() {
  const [status, setStatus] = useState("Initializing...");
  const lastWriteTime = useRef(0); // Tracks the last time we sent data to Firebase

  useEffect(() => {
    // Check if the browser supports geolocation
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
      return;
    }

    setStatus("Locating...");

    // Watch position continuously updates when the device moves
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const now = Date.now();

        // OPTIMIZATION: Only send a write to Firebase once every 5 seconds
        if (now - lastWriteTime.current >= 5000) {
          lastWriteTime.current = now;

          // Write to Firebase Database at the exact path: users/user1
          set(ref(db, 'users/user1'), {
            latitude: latitude,
            longitude: longitude,
            timestamp: now
          })
          .then(() => setStatus(`Live: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`))
          .catch((error) => setStatus("Error writing to DB: " + error.message));
        }
      },
      (error) => {
        setStatus("Error getting location: " + error.message);
      },
      {
        enableHighAccuracy: true, // Use GPS if available
        maximumAge: 5000,         // Accept cached position up to 5s old
        timeout: 10000            // Timeout if no location after 10s
      }
    );

    // Cleanup: Stop watching location if component unmounts
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
      <h3>Phone App (Sender) 📡</h3>
      <p>Status: {status}</p>
    </div>
  );
}
