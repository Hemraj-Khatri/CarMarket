import React, { useState } from 'react';
import CarItems from '../components/CarItems';
import { useGetCertifiedListingsQuery, useGetNewLIstingsQuery, useGetUsedListingsQuery } from '../Slices/listingApiSlice';

function ConditionPage() {
  // Fetch the listings using your API hooks
  const { data: getNewListings, isLoading: NewConditionLoading, error: newError } = useGetNewLIstingsQuery();
  const { data: getUsedListings, isLoading: UsedConditionLoading, error: useError } = useGetUsedListingsQuery();
  const {data:getCertifiedListings, isLoading:getCertifiedLoading, error:certifiedError} = useGetCertifiedListingsQuery();

  

  // State to control the number of items to display for new and used cars
  const [newLimit, setNewLimit] = useState(6); // Initially show 6 new cars
  const [usedLimit, setUsedLimit] = useState(6); // Initially show 6 used cars
  const [certifiedLimit, setCertifiedLimit] = useState(3); // Initially show 6 Certified Pre-Owned cars

  // Handlers to increase the limit (show more cars)
  const handleSeeMoreNewCars = () => {
    setNewLimit((prevLimit) => prevLimit + 6); // Show 6 more new cars
  };

  const handleSeeMoreUsedCars = () => {
    setUsedLimit((prevLimit) => prevLimit + 6); // Show 6 more used cars
  };
  const handleSeeMoreCerfiedCars = () => {
    setCertifiedLimit((prevLimit) => prevLimit + 6); // Show 6 more used cars
  };


  return (
    <div>
      {/* New Condition Cars */}
      {NewConditionLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="px-20 font-semibold text-3xl py-5">New Condition</h1>
          <div className="flex flex-wrap px-10">
            {getNewListings?.data.slice(0, newLimit).map((car, index) => (
              <div key={index} className="w-1/3">
                <CarItems car={car} />
              </div>
            ))}
          </div>
          {/* Show 'See More' button only if there are more cars to display */}
          {newLimit < getNewListings?.data.length && (
            <div className="text-center py-5">
              <button
                onClick={handleSeeMoreNewCars}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                See More
              </button>
            </div>
          )}
        </div>
      )}

      {/* Used Condition / Second-Hand Cars */}
      {UsedConditionLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="px-20 font-semibold text-3xl py-5">Used Cars / Second Hand</h1>
          <div className="flex flex-wrap px-10">
            {getUsedListings?.data.slice(0, usedLimit).map((car, index) => (
              <div key={index} className="w-1/3">
                <CarItems car={car} />
              </div>
            ))}
          </div>
          {/* Show 'See More' button only if there are more cars to display */}
          {usedLimit < getUsedListings?.data.length && (
            <div className="text-center py-5">
              <button
                onClick={handleSeeMoreUsedCars}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                See More
              </button>
            </div>
          )}
        </div>
      )}
          <h1 className="px-20 font-semibold text-3xl py-5">Certified Pre-Owned</h1>

     
    {
      getCertifiedLoading?(<div>Loading</div>):(
      <>  <div className="flex flex-wrap px-10">
          {
           getCertifiedListings?.data.slice(0, certifiedLimit).map((car, index)=>(
              <div key={index} className="w-1/3">
                <CarItems car={car}/>
              </div>
            ))
          }
        </div>
        <div>
        {certifiedLimit < getCertifiedListings?.data.length && (
            <div className="text-center py-5">
              <button
                onClick={handleSeeMoreCerfiedCars}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                See More
              </button>
            </div>
          )}
        </div>
</>
      
      )
    }



    </div>
  );
}

export default ConditionPage;
