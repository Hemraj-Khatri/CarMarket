import React from "react";
import { useGetTruckCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems";

function TruckCategoryPage() {
  const {
    data: getTruckCategory,
    isLoading,
    error,
  } = useGetTruckCategoryQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            Truck Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getTruckCategory.data.map((car, index) => (
              <div key={index} className="w-1/3">
                <CarItems car={car} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default TruckCategoryPage;
