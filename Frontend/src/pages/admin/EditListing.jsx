import React, { useState, useEffect } from "react";
import FeaturesCheckbox from "../../components/FeaturesCheckbox";
import Icons from "../../components/Icons";
import InputField from "../../components/InputField";
import SeletOption from "../../components/SeletOption";
import UploadImage from "../../components/UploadImage";
import carDetails from "../../carDetails.json";
import { toast } from "react-toastify";
import {
  useAddNewListingMutation,
  useEditListingMutation,
  useGetListByIdQuery,
} from "../../Slices/listingApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

export default function ListingForm() {
  const { id } = useParams();
  const [editListing, { isLoading }] = useEditListingMutation();

  const {
    data: getListById,
    isLoading: getListByIdisLoading,
    error: getListByIdError,
  } = useGetListByIdQuery(id);

  const [formData, setFormData] = useState({
    listingTitle: "",
    tagline: "",
    originalPrice: "",
    sellingPrice: "",
    category: "",
    condition: "",
    make: "",
    model: "",
    year: "",
    driveType: "",
    transmission: "",
    fuelType: "",
    mileage: "",
    cylinder: "",
    door: "",
    offerType: "",
    description: "",
    features: {},
    images: [],
  });

  const navigate = useNavigate();

  // Populate formData when getListById data is available
  useEffect(() => {
    if (getListById && getListById.data) {
      setFormData({
        listingTitle: getListById.data.listingTitle || "",
        tagline: getListById.data.tagline || "",
        originalPrice: getListById.data.originalPrice || "",
        sellingPrice: getListById.data.sellingPrice || "",
        category: getListById.data.category || "",
        condition: getListById.data.condition || "",
        make: getListById.data.make || "",
        model: getListById.data.model || "",
        year: getListById.data.year || "",
        driveType: getListById.data.driveType || "",
        transmission: getListById.data.transmission || "",
        fuelType: getListById.data.fuelType || "",
        mileage: getListById.data.mileage || "",
        cylinder: getListById.data.cylinder || "",
        door: getListById.data.door || "",
        offerType: getListById.data.offerType || "",
        description: getListById.data.description || "",
        features: getListById.data.features || {},
        images: Array.isArray(getListById.data.images)
          ? getListById.data.images
          : [],
      });
    }
  }, [getListById]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        features: {
          ...prevData.features,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (imagePath) => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, imagePath],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        listingTitle,
        tagline,
        originalPrice,
        sellingPrice,
        category,
        condition,
        make,
        model,
        year,
        driveType,
        transmission,
        fuelType,
        mileage,
        cylinder,
        door,
        offerType,
        description,
        features,
        images,
      } = formData;

      let resp = await editListing({
        id,
        data: {
          listingTitle,
          tagline,
          originalPrice,
          sellingPrice,
          category,
          condition,
          make,
          model,
          year,
          driveType,
          transmission,
          fuelType,
          mileage,
          cylinder,
          door,
          offerType,
          description,
          features,
          images,
        },
      }).unwrap();
      console.log(resp);
      toast.success(resp.message);
      navigate("/"); // Redirect on success
    } catch (error) {
      console.error(error);
      toast.error("Failed to update listing");
    }
  };

  return (
    <div className="md:mb-10">
      <h1 className="md:text-4xl text-3xl ps-6 md:ps-20 md:my-6 font-bold">
        Add New Listing
      </h1>
      {getListByIdisLoading ? (
        <h1>Loading</h1>
      ) : getListByIdError ? (
        <h1>data fetch error</h1>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-10 border rounded-xl mt-10 md:mx-20"
        >
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
            <label
              htmlFor="description"
              className="flex items-center leading-tight mb-0"
            >
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
      )}
    </div>
  );
}
