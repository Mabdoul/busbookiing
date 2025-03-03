// src/pages/about/About.js
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our platform! We are dedicated to providing the best
          services and experiences for our users. Stay tuned for more updates.
        </p>
      </div>
    </div>
  );
};

export default About;
