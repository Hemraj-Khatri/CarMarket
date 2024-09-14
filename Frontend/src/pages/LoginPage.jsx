
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useLoginMutation} from "../Slices/userApiSlice.js"
import {toast} from "react-toastify"
import { useDispatch, useSelector } from "react-redux";
import {setCredentials} from "../Slices/authSlice.js"

const LoginPage = () => {

  const [login, {isLoading}] = useLoginMutation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
const dispatch = useDispatch();


  
  const onSubmitHandler =async (e)=>{
    e.preventDefault();
try {
  let resp = await login({username, password}).unwrap();
  console.log(resp);
 let re= dispatch(setCredentials(resp.user));
 console.log(re);
 
  navigate("/")

  toast.success(resp.Message);
  
} catch (err) {
  toast.error(err.data.message);
  console.log(err);
  
  
  
  
}
   
  } 


  return (
    <div className="min-w-96 mt-10 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter-md bg-opacity-20 backdrop-blur-md border border-gray-100">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={username}
            onChange={(e)=>setUsername(e.target.value)
            }
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)
              }
              className="w-full input input-bordered h-10"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-center my-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              {" "}
              signup{" "}
            </Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700 hover:bg-success hover:text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;