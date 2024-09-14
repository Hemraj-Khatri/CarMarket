import { Link, useNavigate } from 'react-router-dom';
import { useSignupMutation } from '../Slices/userApiSlice';
import { useState } from 'react';
import {toast} from "react-toastify"

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState(""); // Gender state variable
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();


  const signupHandler = async (e) => {
    try {
      e.preventDefault(); // Prevent form default submission
      let resp = await signup({ fullName, username, password, confirmPassword, gender }).unwrap();
      navigate("/login")
      toast.success(resp.message);
    } catch (error) {
  toast.error(error.data.message);
   
    }
  };

  // Function to handle checkbox selection
  const handleCheckbox = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="min-w-96 mx-auto my-5">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={signupHandler}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='Full Name' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full input input-bordered h-10'
              type="text"
              placeholder='Username' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Password' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full input input-bordered h-10'
              type="password"
              placeholder='Confirm Password' />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                checked={gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                checked={gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox mx-2" />
            </div>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login" className='text-primary hover:underline'>login</Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700 hover:btn-success hover:text-white'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
