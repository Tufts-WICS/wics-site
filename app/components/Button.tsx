"use client";

import React from 'react';

function MyButton() {
        const data = "Printed to console!";
  return (
      <button className="bg-indigo-600 hover:bg-black font-mono 
      text-white text-lg italic justify-center px-4 py-2 rounded" onClick={() => console.log(data)}
      >Press Here</button>
  );

  
};
export default MyButton;