import React from "react";
import { useMyOrderQuery } from "../Slices/orderApiSlice";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const orders = [
    {
      id: 1,
      date: "2024-09-16",
      totalAmount: "$150",
      delivered: "Yes",
      paid: "No",
    },
    {
      id: 2,
      date: "2024-09-15",
      totalAmount: "$200",
      delivered: "No",
      paid: "Yes",
    },
    // Add more order data here
  ];
  const { id } = useParams();
  const { data: myorder, isLoading, error } = useMyOrderQuery(id);
  console.log(myorder);

  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>data is not Fetch</h1>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Total Amount</th>
              <th className="py-3 px-6 text-left">Paid</th>
              <th className="py-3 px-6 text-center">State</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {myorder.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-left">{order._id}</td>
                <td className="py-3 px-6 text-left">
                  {new Date(order.updatedAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-6 text-left">{order.totalPrice}</td>

                <td className="py-3 px-6 text-left">
                  {order.isPaid ? <h1>Paid</h1> : <h1>Not Paid</h1>}
                </td>

                <td className="py-3 px-6 text-center">
                  <Link
                    to={`/order/${order._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyOrder;
