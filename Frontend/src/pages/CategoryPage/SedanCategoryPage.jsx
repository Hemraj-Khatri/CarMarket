import React from "react";
import { useGetSedanCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems.jsx";

function SedanCategoryPage() {
  const {
    data: getSedanCategory,
    isLoading,
    error,
  } = useGetSedanCategoryQuery();

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error while loading</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            Sedan Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getSedanCategory.data.map((car, index) => (
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

export default SedanCategoryPage;
