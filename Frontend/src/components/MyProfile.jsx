import React from "react";
import UpdateProfile from "./updateProfile.jsx";
import MyOrder from "./MyOrder.jsx";
function MyProfile() {
  return (
    <div className="md:grid md:grid-cols-[1fr_2fr] gap-4">
      <div>
        <UpdateProfile />
      </div>
      <div>
        <MyOrder />
      </div>
    </div>
  );
}

export default MyProfile;
