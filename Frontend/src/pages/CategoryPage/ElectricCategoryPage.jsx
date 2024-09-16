import React from "react";
import { useGetElectricCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems";

function ElectricCategoryPage() {
  const {
    data: getElectricCategory,
    isLoading,
    error,
  } = useGetElectricCategoryQuery();

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error while loading</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            Electric Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getElectricCategory.data.map((car, index) => (
              <div key={index} className="w-1/3">
                <CarItems car={car} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ElectricCategoryPage;
