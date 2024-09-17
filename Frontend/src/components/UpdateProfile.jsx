import React, { useState } from "react";

import { useUserUpdateMutation } from "../Slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProfile() {
  const { userInfo } = useSelector((state) => state.auth);

  const [fullName, setFullName] = useState(userInfo.fullName || "");
  const [username, setUsername] = useState(userInfo.username || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const { id } = useParams();

  const [userUpdate, { isLoading }] = useUserUpdateMutation(id);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let resp = await userUpdate({
        id,
        data: {
          fullName,
          username,
          password,
          confirmPassword,
        },
      }).unwrap();
      toast.success(resp.message);
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <div className="max-w-md  md:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            // value={formData.username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
