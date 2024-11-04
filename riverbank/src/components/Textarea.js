// src/components/Textarea.js
import React from 'react';

const Textarea = ({ value, onChange, placeholder, rows, className }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`border rounded-lg p-2 w-full ${className}`}
    />
  );
};

export default Textarea;
