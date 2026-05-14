import React, { useEffect, useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '12px'
};

export default function LiveMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // 3. Connect Firebase Realtime Database to read live location from users/user1
    const locationRef = ref(db, 'users/user1');
    
    // 5. Update the marker in real time when Firebase data changes
    const unsubscribe = onValue(locationRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.latitude && data.longitude) {
        const newPos = { lat: data.latitude, lng: data.longitude };
        setLocation(newPos);
        
        // 6 & 7. Make the marker smoothly update position and center map
        if (mapRef.current) {
          mapRef.current.panTo(newPos);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps API...</div>;
  if (!location) return <div>Waiting for live location data from Firebase...</div>;

  return (
    // 2. Create a Map component that loads Google Map correctly
    <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={16}
      center={location} // Centers map
      onLoad={onLoad}
    >
      {/* 4. Show a marker on the map at the live location */}
      <Marker position={location} />
    </GoogleMap>
  );
}
