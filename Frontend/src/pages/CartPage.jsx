import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constant";
import { removeItem } from "../Slices/cartSlice";

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCartItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Calculate subtotal cost
  const subTotalCost = cartItems
    .reduce((acc, item) => acc + (parseFloat(item.sellingPrice) || 0), 0)
    .toFixed(2);

  // Convert subTotalCost to a number for comparison
  const numericSubTotalCost = parseFloat(subTotalCost);

  // Determine delivery charge based on subtotal cost
  const deliveryCharge = numericSubTotalCost > 400000 ? 0 : 1000;
  // Calculate total cost
  const totalCost = (parseFloat(subTotalCost) + deliveryCharge).toFixed(2);

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
        <div className="md:grid md:grid-cols-[2fr_1fr] my-4 px-4 gap-4">
          <div className="shadow-lg">
            {cartItems.map((item, index) => (
              <div key={index} className="md:flex py-2 items-center">
                {item.images ? (
                  <img
                    src={`${BASE_URL}${item.images}`}
                    alt="Cart Image"
                    className="md:w-[15%] w-[80%] mx-5 rounded-md md:hover:w-[20%] transition-all duration-300"
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
                    className="btn bg-red-500 hover:bg-red-600 mx-4 px-5 btn-sm md:btn-md text-white"
                    onClick={() => removeCartItem(item._id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
            <hr />
          </div>

          {/* right side table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th
                    colSpan={2}
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total Cars ({cartItems.length})
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Sub Total Cost
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${subTotalCost}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Delivery Charge
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${deliveryCharge}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total Cost
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${totalCost}
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <button className="btn bg-blue-600 hover:bg-blue-700 my-4 text-white">
                      Process To Checkout ({cartItems.length})
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default CartPage;
