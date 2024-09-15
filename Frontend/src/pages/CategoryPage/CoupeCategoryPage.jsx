import React from "react";
import { useGetCoupeCategoryQuery } from "../../Slices/listingApiSlice";
import CarItems from "../../components/CarItems";

function CoupeCategoryPage() {
  const {
    data: getCoupeCategory,
    isLoading,
    error,
  } = useGetCoupeCategoryQuery();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="px-20 font-semibold text-3xl py-5">
            Coupe Category Cars
          </h1>
          <div className="flex flex-wrap px-10">
            {getCoupeCategory.data.map((car, index) => (
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

export default CoupeCategoryPage;
