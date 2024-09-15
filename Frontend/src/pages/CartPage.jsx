import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constant";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCartItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      {cartItems.length <= 0 ? (
        <h1 className="bg-blue-100 p-10 mx-20 rounded-md my-5 text-center text-2xl">
          Go Back{" "}
          <Link to="/" className="text-blue-600 font-semibold underline">
            Click Here{" "}
          </Link>
        </h1>
      ) : (
        <div className="mt-10 container md:px-20">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="shadow-lg my-5 py-5 md:flex items-center"
            >
              {item.images ? (
                <img
                  src={`${BASE_URL}${item.images}`}
                  alt="Cart Image"
                  className="md:w-[15%] w-[90%] mx-5 rounded-md hover:w-[20%] transition-all duration-300"
                />
              ) : (
                <p className="text-red-500">Image not available</p>
              )}
              <div className="mx-4">
                <Link
                  to={`/list-details/${item._id}`}
                  className="text-blue-600 underline font-semibold text-sm md:text-2xl"
                >
                  {item.listingTitle}
                </Link>
                <h2 className="font-semibold text-sm md:text-2xl pt-4">
                  Price: ${item.sellingPrice}
                </h2>
              </div>
              <div className="ms-auto my-4">
                <button
                  className="btn btn-warning mx-4 px-5 btn-sm md:btn-md text-white"
                  onClick={() => removeCartItem(item._id)}
                >
                  DELETE
                </button>
                <button className="btn btn-success mx-4 px-5 btn-sm md:btn-md text-white">
                  Shipping
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CartPage;
