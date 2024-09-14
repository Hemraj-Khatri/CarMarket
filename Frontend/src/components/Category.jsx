import React from "react";

import { category } from "../data.js";
export default function Category() {
  return (
    <div className=" md:mt-24 my- 5">
      <h1 className="text-center font-semibold text-3xl py-5">
        Browse By Type
      </h1>
      <div className="flex flex-wrap justify-center space-x-5 text-center ">
        {category.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-3 
                items-center  flex flex-col hover:shadow-md cursor-pointer"
          >
            <img
              src={item.icon}
              alt="car Icon"
              width="60%"
              className="border rounded-t-md"
            />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
