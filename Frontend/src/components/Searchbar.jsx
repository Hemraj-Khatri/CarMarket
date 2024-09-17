import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchListingsQuery } from "../Slices/listingApiSlice";

export default function Searchbar({ setSearchResults, setHasSearched }) {
  const [carType, setCarType] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [searchTrigger, setSearchTrigger] = useState(false);

  const { data: searchResults, isLoading } = useSearchListingsQuery(
    { carType, category, priceRange },
    { skip: !searchTrigger }
  );

  const handleSearch = () => {
    setSearchTrigger(true);
    setHasSearched(true); // Mark as searched
    if (searchResults && searchResults.data) {
      setSearchResults(searchResults.data);
    }
  };

  return (
    <div className="bg-white rounded-full flex md:w-[60%] md:p-5 py-5">
      <select
        className="select w-full max-w-xs text-black"
        value={carType}
        onChange={(e) => setCarType(e.target.value)}
      >
        <option value="" disabled>
          Cars
        </option>
        <option value="New">New</option>
        <option value="Used">Used</option>
        <option value="Certified Pre-Owned">Certified Pre-Owned</option>
      </select>

      <div className="flex items-center space-x-4">
        <div className="h-12 w-px bg-gray-300"></div>
      </div>

      <select
        className="select w-full max-w-xs text-black"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Category
        </option>
        <option value="Sedan">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="Truck">Truck</option>
        <option value="Coupe">Coupe</option>
        <option value="Convertible">Convertible</option>
        <option value="Van">Van</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <div className="flex items-center space-x-4">
        <div className="h-12 w-px bg-gray-300"></div>
      </div>

      <select
        className="select w-full max-w-xs text-black"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="" disabled>
          Pricing
        </option>
        <option value="2000-4000">$2000-$4000</option>
        <option value="4000-8000">$4000-$8000</option>
        <option value="8000-12000">$8000-$12000</option>
        <option value="12000-20000">$12000-$20000</option>
      </select>

      <div className="flex items-center">
        <CiSearch
          className="md:text-5xl text-4xl flex items-center md:p-2 bg-blue-600 rounded-full text-white cursor-pointer hover:scale-105 transition-all"
          onClick={handleSearch}
        />
      </div>

      {isLoading && <p>Loading...</p>}
    </div>
  );
}
