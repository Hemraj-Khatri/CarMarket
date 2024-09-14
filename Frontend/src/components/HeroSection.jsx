import React from "react";
import car from "../assets/tesla.png";
import Searchbar from "./Searchbar";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center py-5 md:py-20  bg-blue-50 gap-10 h-[400px] md:h-[650px] md:w-full">
      <h2 className="text-xl">Find cars for sale and for rent near you</h2>
      <h1 className="md:text-6xl font-bold">Find Your Dream Car</h1>
      <Searchbar />
      <img src={car} alt="Car Picture" />
    </div>
  );
}
