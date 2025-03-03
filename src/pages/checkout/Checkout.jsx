import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 

const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract query parameters
  const totalSeats = Number(queryParams.get('totalSeats')) || 0; // Default to 0
  const departure = queryParams.get('departure') || "Location 1"; // Default to "Location 1"
  const arrival = queryParams.get('arrival') || "Location 4"; // Default to "Location 4"
  const totalPrice = totalSeats * 75; // Assuming each seat costs 75 MAD

  // State for form data
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    altPhone: '',
  });

  // State for success message
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful booking
    setBookingSuccess(true);
  };

  if (bookingSuccess) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl text-green-600 font-semibold">Booking Successful</h1>
        <p className="text-lg text-neutral-700">Thank you for your booking! Your reservation is confirmed.</p>
        <p className="text-base text-neutral-500">You will receive an email with your ticket details shortly.</p>
        <button
          onClick={() => setBookingSuccess(false)}
          className="py-3 px-6 bg-purple-500 text-white rounded-md mt-6"
        >
          Go back to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10">
      <div className="grid grid-cols-5 gap-16 items-start">
        <div className="col-span-3 space-y-7 pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Passenger Information
          </h2>
          <form className="space-y-6" aria-labelledby="passenger-info" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="sr-only">Passenger Details</legend>
              <div>
                <label htmlFor="fullname" className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                />
                <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                  You will receive your tickets via this email.
                </small>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="altPhone" className="block mb-2 font-semibold">Alternative Phone Number</label>
                <input
                  type="tel"
                  id="altPhone"
                  name="altPhone"
                  value={formData.altPhone}
                  onChange={handleChange}
                  className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white rounded-md text-lg font-semibold"
            >
              Proceed to Pay →
            </button>
          </form>
        </div>
        <div className="col-span-2 space-y-8">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              Your Booking Status
            </h2>
            <div className="space-y-8 pb-3">
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">Your Destination</h6>
                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">From: <span className="ml-1.5">{departure}</span></div>
                  <div className="flex-1 border-dashed border-neutral-400 dark:border-neutral-700/80 border"></div>
                  <div className="w-fit text-base font-medium">To: <span className="ml-1.5">{arrival}</span></div>
                </div>
              </div>
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">Total Seats</h6>
                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">Seats: <span className="ml-1.5">{totalSeats}</span></div>
                </div>
              </div>
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">Total Fare Price</h6>
                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">Total Fare Price: <span className="ml-1.5">{totalPrice} DH</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
