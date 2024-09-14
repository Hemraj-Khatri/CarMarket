import React from "react";
import { CiSearch } from "react-icons/ci";
export default function Searchbar() {
  return (
    <div className="bg-white rounded-full flex  md:w-[60%] md:p-5 py-5">
      <select className="select  w-full max-w-xs text-black">
        <option disabled value="Pricing">
          Cars
        </option>
        <option>New </option>
        <option>Used</option>
        <option>Certified Pre-Owned</option>
      </select>
      {/* vertical line */}
      <div className="flex items-center space-x-4">
        <div className="h-12 w-px bg-gray-300"></div>
      </div>
      <select className="select w-full max-w-xs text-black">
        <option disabled value="Pricing">
          Car Makes
        </option>
        <option>Audi</option>
        <option>BMW</option>
        <option>Lamborghini</option>
        <option>Land Rover</option>
        <option>Tesla</option>
        <option>Toyata</option>
      </select>

      {/* vertical line */}
      <div className="flex items-center space-x-4">
        <div className="h-12 w-px bg-gray-300"></div>
      </div>
      <select className="select border-none w-full max-w-xs text-black">
        <option disabled value="Pricing">
          Pricing
        </option>
        <option>$2000</option>
        <option>$4000</option>
        <option>$2300</option>
        <option>$2100</option>
      </select>
      {/* <IoSearchOutline className="text-black" />
       */}
      <div className="flex items-center ">
        {" "}
        <CiSearch className="md:text-5xl text-4xl flex items-center md:p-2 bg-blue-600 rounded-full text-white cursor-pointer hover:scale-105 transition-all" />
      </div>
    </div>
  );
}
