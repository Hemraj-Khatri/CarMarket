import React from "react";
import { useGetOrderByIdQuery } from "../Slices/orderApiSlice";
// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Message from "../components/Message";
import { useSelector } from "react-redux";
function OrderPage() {
  const { id } = useParams();
  const { data: order, refetch, isLoading, error } = useGetOrderByIdQuery(id);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="md:grid md:grid-cols-[2fr_1fr] gap-4 px-4 md:px-20">
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>No data fetch</h1>
      ) : (
        <>
          {/* left side */}
          <div>
            <div className="space-y-2 my-4">
              <h1 className="text-2xl font-semibold">Shipping</h1>
              <p>Name: {order.shippingAddress.name}</p>
              <p>Contact: {order.shippingAddress.contact}</p>
              <p>Address:{order.shippingAddress.address}</p>
              <p>City:{order.shippingAddress.city}</p>
              {order.isDelivered ? (
                <Message>
                  Delivered At {new Date(order.createdAt).toDateString()}
                </Message>
              ) : (
                <h2 variant="danger"> Not Delevered</h2>
              )}
            </div>
            <hr />
            <div className="space-y-2 my-5">
              <h2 className="text-2xl font-semibold">Payment</h2>
              <p>Mode: COD</p>
              {order.isPaid ? (
                <Message>Paid At</Message>
              ) : (
                <Message>No Paid</Message>
              )}
            </div>
            <div className="border space-y-px">
              {order.orderItems.map((item, index) => (
                <div key={index} className="border flex items-center">
                  <img
                    src={item.images}
                    alt="order image"
                    className="w-[15%] rounded-md"
                  />
                  <Link
                    to={`/list-details/${item.listing}`}
                    className="text-blue-500 underline mx-4"
                  >
                    {item.listingTitle}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="">
            <div className="border h-[20%] md:mt-10">
              <h1 className="text-3xl font-semibold text-center py-2">
                Order Summary
              </h1>
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
                      <td className="px-4 py-2 border-b">${order.itemPrice}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Shipping Charge</td>
                      <td className="px-4 py-2 border-b">
                        ${order.shippingCharge}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Total Cost</td>
                      <td className="px-4 py-2 border-b font-semibold">
                        ${order.totalPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">Status</td>
                      <td className="px-4 py-2 border-b font-semibold bg-blue-50">
                        {order.status}
                      </td>
                    </tr>
                    <tr>
                      {userInfo.isAdmin && (
                        <td colSpan={2} className="text-end px-4 py-2 border-b">
                          <span>Edit</span>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderPage;
