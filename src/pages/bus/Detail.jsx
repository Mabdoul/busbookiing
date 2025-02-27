// src/pages/bus/Detail.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Bus from '../../assets/bus9.png';
import Seat from '../../components/seat/Seat';

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from');
  const to = queryParams.get('to');
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalFairPrices, setTotalFairPrices] = useState();

  const handleSeatSelect = (seatNumber) => {
    const updatedSeats = [...selectedSeats];
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(updatedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...updatedSeats, seatNumber]);
      } else {
        alert('You can only select a maximum of 10 seats');
      }
    }
    setTotalFairPrices(selectedSeats.length * 75); // Assuming each seat costs 75 MAD
  };

  const handleProceedToCheckout = () => {
  if (selectedSeats.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
    navigate(`/bus/bus-details/bus/bus-details/checkout?totalSeats=${selectedSeats.length}&totalFairPrices=${totalFairPrices}`);
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]">
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img
            src={Bus}
            alt="detail img"
            className="w-full aspect-[3/2] rounded-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Luxury Bus
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                (Bus Number Plate)
              </span>
            </h1>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                (4.5)
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                Your Destination
              </h1>
              <div className="w-full flex items-center gap-x-3">
                <div className="w-fit text-base font-semibold">
                  From: <span className="ml-1.5">{from}</span>
                </div>
                <div className="flex-1">
                  <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80"></div>
                </div>
                <div className="w-fit text-base font-semibold">
                  To: <span className="ml-1.5">{to}</span>
                </div>
              </div>
            </div>
          </div>
          {/* seat selection */}
          <Seat onSeatSelect={handleSeatSelect} />
          {/* checkout Btn */}
          <div className="flex">
            <button
              onClick={handleProceedToCheckout}
              className='w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300'
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;