import React, { useState } from "react";
import { saveShippingAddress } from "../Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ShippingAddressPage() {
  const { userInfo } = useSelector((state) => state.auth);
  const { shippingAddress } = useSelector((state) => state.cart);

  const [name, setName] = useState(userInfo?.fullName || "");
  const [contact, setContact] = useState(shippingAddress?.contact || "");
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHaldler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ name, contact, address, city }));
    navigate("/review");
  };
  return (
    <div className="flex flex-col items-center mb-5 ">
      <h2 className="font-bold py-6 text-4xl text-gray-800">
        Shipping Address
      </h2>
      <form
        onSubmit={onSubmitHaldler}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Recipient Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            value={name}
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Contact
          </label>
          <input
            type="tel"
            placeholder="Enter Contact"
            id="contact"
            value={contact}
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            placeholder="Enter Your Address"
            id="address"
            value={address}
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            placeholder="Enter Your City/District"
            id="city"
            value={city}
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg">
          Continue
        </button>
      </form>
    </div>
  );
}

export default ShippingAddressPage;
