// src/components/Card.js
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-green rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
