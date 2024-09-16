import React from "react";
import { allCartClear } from "../Slices/cartSlice";
import { BASE_URL } from "../constant.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReviewPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cart);

  const onSubmitHaldler = () => {
    dispatch(allCartClear());
    console.log("all are cleared");
  };

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
    <div className="md:grid md:grid-cols-[2fr_1fr] px-20  gap-4">
      <div>
        <h2 className="text-3xl py-4 font-semibold">Review </h2>
        <div className="space-y-2">
          {" "}
          <p>
            <strong>Recipient: </strong>
            {cart.shippingAddress.name}
          </p>
          <p>
            {" "}
            <strong>Address: </strong>
            {cart.shippingAddress.address}
          </p>
          <p>
            <strong>Contact:</strong> {cart.shippingAddress.contact}
          </p>
          <p>
            <strong>City:</strong> {cart.shippingAddress.city}
          </p>
        </div>
        <div className="border space-y-px my-4 w-[100%] p-4">
          {cart.cartItems.map((item, index) => (
            <div className="border flex items-center">
              <img
                src={`${BASE_URL}${item.images}`}
                alt="cart Image"
                className="w-[15%] rounded-md"
              />
              <Link
                to={`/list-details/${item._id}`}
                className="text-xl md:mx-4 text-blue-600 underline"
              >
                {item.listingTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border h-[80%] md:mt-10">
        <h1 className="text-3xl font-semibold">Order Summary</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left bg-white shadow-md rounded-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Sub Total Cost</td>
                <td className="px-4 py-2 border-b">${subTotalCost}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Shipping Charge</td>
                <td className="px-4 py-2 border-b">${deliveryCharge}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Total Cost</td>
                <td className="px-4 py-2 border-b font-semibold">
                  ${totalCost}
                </td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center ">
                  <button
                    className="btn bg-blue-500 w-[50%] text-white my-4"
                    onClick={onSubmitHaldler}
                  >
                    PlaceOrder
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
