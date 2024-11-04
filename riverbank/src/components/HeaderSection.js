import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/images/bible.jpeg',
    '/assets/images/music.jpeg',  // Make sure to add these images
    '/assets/images/angels.jpeg'   // to your assets folder
  ];

  const overlayStyle = "absolute inset-0 bg-black bg-opacity-50";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // eslint-disable-next-line
  }, []); // eslint-disable-next-line

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Slideshow */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className={overlayStyle} />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Riverbank SDA Church
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-delay">
            Join us in worship, fellowship, and spiritual growth
          </p>
          <div className="space-x-4 animate-fade-in-delay-2">
            <Link
              to="/services"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              Service Times
            </Link>
            <Link
              to="/about"
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;