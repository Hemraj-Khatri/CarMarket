import React from "react";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";
import { LuFuel } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { BASE_URL } from "../constant";
import { Link } from "react-router-dom";

export default function CarItems({ car }) {
  // Construct the full image URL
  const imageUrl = `${BASE_URL}${car.images[0]}`;

  return (
    <div className="mx-3 shadow-lg my-5 cursor-pointer hover:shadow-2xl">
      <div className="flex justify-center ms-5 items-center">
        <Link to={`/list-details/${car._id}`}>
          <img
            src={imageUrl}
            alt="Car Image"
            className="rounded-lg w-[90%] h-auto block"
          />
        </Link>
      </div>

      <div className="px-5">
        <h1 className="font-semibold text-xl py-3">{car.listingTitle}</h1>
        <hr className="mx-5" />
        <div className="flex justify-between py-4 text-center">
          <div className="items-center flex flex-col">
            <MdOutlineSpeed />
            <p>{car.mileage} Miles</p>
          </div>
          <div className="items-center flex flex-col">
            <LuFuel />
            <p>{car.fuelType}</p>
          </div>
          <div className="items-center flex flex-col">
            <GiGearStickPattern />
            <p>{car.transmission}</p>
          </div>
        </div>
        <hr />
        <div className="my-2 flex justify-between">
          <p>${car.sellingPrice}</p>
          <Link to={`/list-details/${car._id}`} className="flex items-center gap-1 text-blue-600">
            View Details <IoMdOpen />
          </Link>
        </div>
      </div>
    </div>
  );
}
