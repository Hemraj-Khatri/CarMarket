import React from "react";
import MyListing from "./MyListing";
import InboxChat from "./InboxChat";
import MyProfile from "./MyProfile";

function Tab() {
  return (
    <div
      role="tablist"
      className="tabs tabs-bordered my-5 md:px-20  w-[100%]   "
    >
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab "
        aria-label="My Listings"
      />
      <div role="tabpanel" className="tab-content p-10">
        <MyListing />
      </div>

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
