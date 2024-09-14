import React, { useState } from "react";
import { useUploadImageMutation } from "../Slices/listingApiSlice";
import { toast } from "react-toastify";

function UploadImage({ onImageUpload }) {
  const [selectFileList, setSelectFileList] = useState([]);
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const fileOnChange = async (e) => {
    const file = e.target.files[0]; // Get the first file only

    if (file) {
      setSelectFileList([file]); // Replace existing file with the new one

      try {
        let formData = new FormData();
        formData.append("image", file);
        let resp = await uploadImage(formData).unwrap();
        toast.success(resp.message);

        // Pass the uploaded image path to the parent component
        onImageUpload(resp.path);
      } catch (error) {
        toast.error(error.data.error);
      }
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold py-5">Upload Car Image</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 cursor-pointer">
        {selectFileList.map((image, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full h-[110px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="car-images">
          <div className="p-10 bg-blue-200 border border-blue-500 rounded-lg">
            <h2 className="text-lg text-center">+</h2>
          </div>
        </label>
        <input
          type="file"
          id="car-images"
          className="opacity-0"
          onChange={fileOnChange}
        />
      </div>
    </>
  );
}

export default UploadImage;
