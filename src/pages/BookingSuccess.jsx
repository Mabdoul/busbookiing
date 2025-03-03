import React from 'react';

const BookingSuccess = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl text-green-600 font-semibold">Booking Successful</h1>
      <p className="text-lg text-neutral-700">Thank you for your booking! Your reservation is confirmed.</p>
      <p className="text-base text-neutral-500">You will receive an email with your ticket details shortly.</p>
    </div>
  );
};

export default BookingSuccess;
