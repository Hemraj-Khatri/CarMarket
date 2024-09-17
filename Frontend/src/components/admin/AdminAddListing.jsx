import React from "react";
import { useGetAllListsQuery } from "../../Slices/listingApiSlice";
import { FaTrash, FaEdit } from "react-icons/fa";
// import { addToCart } from "../../Slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function AdminAddListing() {
  const { data: getAllLists, isLoading, error } = useGetAllListsQuery();

  return (
    <div className="my-5">
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Not Getting Data</h1>
      ) : (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100 text-blue-700 text-left">
                    <th className="py-3 px-6 border-b border-gray-300">ID</th>
                    <th className="py-3 px-6 border-b border-gray-300">Name</th>
                    <th className="py-3 px-6 border-b border-gray-300">
                      Price
                    </th>
                    <th className="py-3 px-6 border-b border-gray-300">
                      Brand
                    </th>
                    <th className="py-3 px-6 border-b border-gray-300">
                      Category
                    </th>
                    <th className="py-3 px-6 border-b border-gray-300">
                      Condition
                    </th>
                    <th className="py-3 px-6 border-b border-gray-300">
                      Configure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getAllLists?.data.map((listing, index) => (
                    <tr key={index} className="hover:bg-gray-100 text-gray-700">
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing._id}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing.listingTitle}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing.sellingPrice}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing.model}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing.category}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300">
                        {listing.condition}
                      </td>
                      <td className="py-3 px-2 text-sm border-b border-gray-300 text-center space-x-4">
                        {/* Pass only the specific listing to the handler */}
                        <Link to={`/editListing/${listing._id}`}>
                          <FaEdit />
                        </Link>
                        <button className="text-red-600">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAddListing;
