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
                <label htmlFor="from" className="block mb-2 font-mediuim">
                    From
                </label>
                <select name="from" id="from" className="w-full text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder:text-neutral-600 appearence-none"></select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
