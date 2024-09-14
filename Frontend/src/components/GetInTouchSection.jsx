import React from "react";
import getImg from "../assets/getSectonCar.jpg";
export default function GetInTouchSection() {
  return (
    <div className="relative md:flex h-[300px] md:h-[600px] mb-80  md:my-24">
      <div
        className="md:w-[40%] md:flex items-center me-4  md:h-[80%] md:relative z-10"
        style={{
          position: "relative",
          top: "10%",
          left: "2%",
          right: "-10%",
        }}
      >
        <img
          src={getImg}
          alt="Get Section Img"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="md:w-[60%] mt-7 ms-4  bg-blue-50 md:relative z-0 md:flex flex-col justify-center ps-8 md:px-32"
        style={{
          position: "relative",
          top: "0",
          left: "-2%",
          right: "0",
        }}
      >
        <h1 className=" md:text-3xl py-4 md:py-0 font-bold pb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.{" "}
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="btn bg-blue-700 text-white hover:bg-transparent hover:border-blue-700 hover:text-blue-700 mt-20 w-52 mb-5 md:mb-0">
          Get in Touch
        </button>
      </div>
    </div>
  );
}
