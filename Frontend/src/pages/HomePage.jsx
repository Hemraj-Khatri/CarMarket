import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";
import TopCars from "../components/TopCars";
import GetInTouchSection from "../components/GetInTouchSection";
import CarItems from "../components/CarItems";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const [hasSearched, setHasSearched] = useState(false);
  useEffect(() => {
    console.log("Search Results in HomePage:", searchResults);
  }, [searchResults]);

  return (
    <div>
      <HeroSection
        setSearchResults={(results) => {
          setSearchResults(results);
          setHasSearched(true);
        }}
        setHasSearched={setHasSearched}
      />

      {hasSearched ? (
        searchResults.length > 0 ? (
          <div className="my-10">
            <h2 className="text-2xl font-semibold px-10">Search Results</h2>
            <div className="flex flex-wrap px-10">
              {searchResults.map((car, index) => (
                <div key={index} className="w-1/3">
                  <CarItems car={car} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>No Result Found</h1>
          </div>
        )
      ) : (
        <div>
          <Category />
          <TopCars />
          <GetInTouchSection />
        </div>
      )}
    </div>
  );
}
