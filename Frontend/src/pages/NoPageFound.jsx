import React from "react";
import { useNavigate } from "react-router-dom";

function NoPageFound() {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Oops! Page not found.</p>
      <p className="text-lg mt-2 text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <button
        onClick={goBackHome}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go back to Homepage
      </button>
    </div>
  );
}

export default NoPageFound;
