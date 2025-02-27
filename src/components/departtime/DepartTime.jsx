// src/components/DepartTime.js
import React, { useState } from 'react';

const DepartTime = () => {
  const [departBus, setDepartBus] = useState("");

  const handleDepartBusChange = (e) => {
    setDepartBus(e.target.value);
  };

  return (
    <div className="w-full space-y-4">
      <label htmlFor="departbus" className="block mb-2 font-semibold">
        Depart Time
      </label>
      <select
        value={departBus}
        onChange={handleDepartBusChange}
        name="departbus"
        id="departbus"
        className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
      >
        <option value="">Select a Time</option>
        <option value="04:00 AM">04:00 AM</option>
        <option value="05:00 AM">05:00 AM</option>
        {/* Add more times as needed */}
      </select>
    </div>
  );
};

export default DepartTime;