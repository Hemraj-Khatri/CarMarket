import React from "react";

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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Total Amount</th>
            <th className="py-3 px-6 text-left">Delivered</th>
            <th className="py-3 px-6 text-left">Paid</th>
            <th className="py-3 px-6 text-center">State</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-6 text-left">{order.id}</td>
              <td className="py-3 px-6 text-left">{order.date}</td>
              <td className="py-3 px-6 text-left">{order.totalAmount}</td>
              <td className="py-3 px-6 text-left">{order.delivered}</td>
              <td className="py-3 px-6 text-left">{order.paid}</td>
              <td className="py-3 px-6 text-center">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyOrder;
