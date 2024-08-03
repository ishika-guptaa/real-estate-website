import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = ({filter,setFilter}) => {
  return (
    <div className="flexBetween  pl-6 h-[3.3rem] bg-white w-full max-w-[366px] rounded-full ring-1 ring-slate-500/5 ">
      <input
      value={filter}
      onChange={(e)=>setFilter(e.target.value)}
        type="text"
        placeholder="Enter residency name/city/country"
        className="bg-transparent border-none outline-none w-full"
      />
      <FaLocationDot className="relative right-4 text-xl hover:text-secondary cursor-pointer" />
    </div>
  );
};

export default SearchBar;
