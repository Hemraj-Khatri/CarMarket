import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "../Slices/userApiSlice";
import { toast } from "react-toastify";
import { logout } from "../Slices/authSlice";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [userLogout, { isLoading }] = useUserLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const resp = await userLogout().unwrap();
      dispatch(logout());
      navigate("/login");
      toast.success(resp.message);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow md:py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/condition">Condition</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost md:text-3xl">
          Car Market Place
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex hover:cursor-pointer md:gap-20">
          <li>
            <Link to="/" className="text-xl font-semibold hover:text-primary">Home</Link>
          </li>
          <li>
            <Link to="/category" className="text-xl font-semibold hover:text-primary">Category</Link>
          </li>
          <li>
            <Link to="/condition" className="text-xl font-semibold hover:text-primary">Condition</Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl font-semibold hover:text-primary">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end md:pe-5">
        {userInfo && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  className="bg-red-600"
                  src={userInfo.profilePhoto}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="justify-between text-2xl font-semibold">
                  {userInfo.fullName}
                </Link>
              </li>
              <li><Link>Settings</Link></li>
              <li>
                <Link
                  onClick={logoutHandler}
                  className="bg-red-500 text-white hover:bg-red-400 w-[40%] text-end ms-auto"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
        <Link to="/cart" className="flex items-center md:text-xl font-semibold md:mx-4">
          <FaCartShopping /> Cart
          {cartItems.length > 0 && <div className="badge badge-warning">{cartItems.length}</div>}
        </Link>
        <Link
          to={userInfo ? "/profile" : "/login"}
          className="bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500"
        >
          Submit Listing
        </Link>
      </div>
    </div>
  );
}
