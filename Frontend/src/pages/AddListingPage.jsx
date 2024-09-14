import React from "react";
import ListingForm from "../components/ListingForm";
import { useGetAllListsQuery } from "../Slices/listingApiSlice";

export default function AddListingPage() {
  // const {getAllLists, isloading} = useGetAllListsQuery();

  // console.log(getAllLists);
  

  return (
    <div>
      <ListingForm />
    </div>
  );
}
