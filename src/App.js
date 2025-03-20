import React, { useState, useEffect } from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import { CloudUpload } from 'react-bootstrap-icons';

function App() {
  const [imageSrc, setImageSrc] = useState('');

  // Load image from localStorage on initial render
  useEffect(() => {
    const storedImage = localStorage.getItem('imageSrc');
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  // Function to handle image click and file input
  const handleImage = () => {
    document.getElementById('imageUpload').click();
  };

  return (
    <Navbar>
      <Container 
        className="d-flex justify-content-center" 
        style={{ backgroundColor: 'cyan', padding: '30px' }}
      >
        <div 
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '1px solid black',
            overflow: 'hidden',
            cursor: 'pointer',
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleImage}
        >
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              roundedCircle 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              alt="Uploaded"
            />
          ) : (
            <CloudUpload size={50} color="#888" />
          )}
          <input 
            type="file" 
            id="imageUpload" 
            style={{ display: 'none' }}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImageSrc(imageUrl);
                localStorage.setItem('imageSrc', imageUrl); // Save to localStorage
              }
            }}
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default App;
