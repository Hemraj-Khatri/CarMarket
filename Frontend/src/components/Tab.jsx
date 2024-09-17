import React from "react";
import MyListing from "./MyListing";
import InboxChat from "./InboxChat";
import MyProfile from "./MyProfile";
import { useSelector } from "react-redux";
import AdminAddListing from "./admin/AdminAddListing";

function Tab() {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  return (
    <div
      role="tablist"
      className="tabs tabs-bordered border my-5 md:px-20  w-[100%]   "
    >
      {userInfo.isAdmin && (
        <>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab "
            aria-label="My Listings"
          />
          <div role="tabpanel" className="tab-content p-10">
            <MyListing />
            <AdminAddListing />
          </div>
        </>
      )}

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Inbox"
        defaultChecked
      />

      <div role="tabpanel" className="tab-content p-10">
        <InboxChat />
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Profile"
      />
      <div role="tabpanel" className="tab-content p-10">
        <MyProfile />
      </div>
    </div>
  );
}

export default Tab;
