import React from "react";

const Search = () => {
  return (
    <div className="w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch] ">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
        <div
          className="grid grid-cols-3 gap-x-10 gap-y-12 items-end
        "
        >
          <div className="">
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="To" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="To"
              id="To"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select Location</option>
              <option value="location1">Location 4</option>
              <option value="location2">Location 5</option>
              <option value="location3">Location 6</option>
            </select>
          </div>
          <div className="">
          <label htmlFor="date" className="block mb-2 font-semibold">
              Choose a date
            </label>
            <input type="date" id="date" name="date" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
          </div>
          <div className="">
          <label htmlFor="time" className="block mb-2 font-semibold">
              Choose a Time
            </label>
            <input type="time" id="time" name="time" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
          </div>
          <div className="">
          <label htmlFor="seat" className="block mb-2 font-semibold">
              Choose a seats
            </label>
            <input type="number" id="seat" placeholder="Enter seat" name="seat" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
          </div>
          <div className="">
            <button className="btn w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
