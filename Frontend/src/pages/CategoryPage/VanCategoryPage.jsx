import React from "react";
import { useGetVanCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems";

function VanCategoryPage() {
  const { data: getVanCategory, isLoading, error } = useGetVanCategoryQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error while loading</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            Van Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getVanCategory.data.map((car, index) => (
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

export default VanCategoryPage;
