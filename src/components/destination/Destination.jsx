import React, { useState } from "react";

const Destination = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };
  const handleToChange = (e) => {
    setTo(e.target.value);
  };
  const isDestinationSelected = from && to;

  return (
    <div className="w-full.space-y-4">
      { !isDestinationSelected ? (
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="">
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
            value={from}
            onChange={handleFromChange}
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="to" className="block mb-2 font-semibold">
              To
            </label>
            <select
            value={to}
            onChange={handleToChange}
              name="to"
              id="to"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="location5">Location 5</option>
              <option value="location6">Location 6</option>
              <option value="location7">Location 7</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
            <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                Your Destination
            </h1>
            <div className="w-full flex items-center gao-x-3">
                
            </div>
        </div>
      )}
    </div>
  );
};

export default Destination;