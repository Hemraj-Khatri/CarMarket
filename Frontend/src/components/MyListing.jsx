import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function MyListing() {
  return (
    <div className="flex justify-between">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold">My Listing</h2>
          </div>
          <div>
            <Link to="/addList">
              <button className="btn bg-blue-600 text-white btn-sm hover:bg-blue-500">
                <FaPlus />
                Add New Listing
              </button>
            </Link>
          </div>
        </div>
  )
}

export default MyListing