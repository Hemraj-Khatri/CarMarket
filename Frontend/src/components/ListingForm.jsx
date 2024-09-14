import React, { useState } from "react";
import carDetails from "../carDetails.json";
import FeaturesCheckbox from "./FeaturesCheckbox";
import Icons from "./Icons";
import InputField from "./InputField";
import SeletOption from "./SeletOption";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { useAddNewListingMutation } from "../Slices/listingApiSlice";
import { useNavigate } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

export default function ListingForm() {
  const [addNewListing, { isLoading }] = useAddNewListingMutation();
  const [formData, setFormData] = useState({
    listingTitle: '',
    tagline: '',
    originalPrice: '',
    sellingPrice: '',
    category: '',
    condition: '',
    make: '',
    model: '',
    year: '',
    driveType: '',
    transmission: '',
    fuelType: '',
    mileage: '',
    cylinder: '',
    door: '',
    offerType: '',
    description: '',
    features: {},
    images: [], // Array to hold image paths
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        features: {
          ...prevData.features,
          [name]: checked
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (imagePath) => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, imagePath] // Add the new image path
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await addNewListing(formData).unwrap();
      navigate("/");
      toast.success(resp.message);
    } catch (err) {
      console.error(err);
      toast.error(err.data.message);
    }
  };

  return (
    <div className="md:mb-10">
      <h1 className="md:text-4xl text-3xl ps-6 md:ps-20 md:my-6 font-bold">
        Add New Listing
      </h1>
      <form onSubmit={handleSubmit} className="p-10 border rounded-xl mt-10 md:mx-20">
        {/* Car Details */}
        <h1 className="pb-6 text-3xl font-semibold">Car Details</h1>
        <div className="grid gap-5 md:grid-cols-2 mb-5 md:mb-10">
          {carDetails.formFields.map((item, index) => (
            <div key={index}>
              <label htmlFor={item.name} className="flex items-center gap-2">
                <Icons icon={item.icon} />
                {item.label}
                {item.required && <span className="text-red-600">*</span>}
              </label>
              {item.type === "text" || item.type === "number" ? (
                <InputField
                  item={item}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
              ) : item.type === "select" ? (
                <SeletOption
                  item={item}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
              ) : null}

            </div>
          ))}


        </div>
        <div className="gap-0 mb-5">
          <label htmlFor="description" className="flex items-center leading-tight mb-0">
            <FaClipboardList className="rounded-full text-blue-500" />
            List Description
          </label>
          <textarea
            name="description"
            id="description"
            className="border mt-0 w-full sm:w-96 md:w-full max-w-full"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>


        <hr />
        {/* Features List */}
        <FeaturesCheckbox
          features={formData.features}
          onChange={handleChange}
        />
        <hr />
        {/* Car Images */}
        <UploadImage onImageUpload={handleImageUpload} />
        <div className="flex justify-end">
          <button className="py-2 text-white rounded-md px-8 bg-blue-600 hover:bg-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
