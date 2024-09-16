import React from "react";
import { useGetSUVCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems";

function SUVCategoryPage() {
  const { data: getSUVCategory, isLoading, error } = useGetSUVCategoryQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error while loading</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            SUV Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getSUVCategory.data.map((car, index) => (
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

export default SUVCategoryPage;
