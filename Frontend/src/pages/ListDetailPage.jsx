import React from "react";
import { useGetCarByIdQuery } from "../Slices/listingApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { MdDateRange, MdOutlineSpeed } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { GiGearStickPattern } from "react-icons/gi";
import { BASE_URL } from "../constant";
import { SiTicktick } from "react-icons/si";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  FaCar,
  FaCarSide,
  FaCircle,
  FaClipboardList,
  FaDoorClosed,
  FaRegCalendarAlt,
  FaRoad,
  FaTag,
  FaTags,
  FaTransgenderAlt,
} from "react-icons/fa";
import { HiColorSwatch } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import FinancingCalculator from "../components/FinancingCalculator";
import SenBridUser from "../Share/SendBridUser";
import { addToCart } from "../Slices/cartSlice";

function ListDetailPage() {
  const { id } = useParams();
  const { data: getCarById, isLoading, error } = useGetCarByIdQuery(id);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = userInfo?.fullName;
  const nickName = userInfo?.username;
  const profileUrl = userInfo?.profilePhoto;
  const OwnerId = getCarById?.data?.createdBy?.username;

  const OnMessageOwnerButtonClick = async () => {
    try {
      console.log("Message Owner Button Clicked");
      console.log("UserId: ", userId);
      console.log("OwnerId: ", OwnerId);

      // Try to create a SendBird user for the current user
      try {
        await SenBridUser.createSendBirdUser(userId, nickName, profileUrl);
        console.log("Created SendBird user for current user");
      } catch (error) {
        if (error.response?.data?.code === 400202) {
          console.log(
            `User ${userId} already exists in SendBird, proceeding...`
          );
        } else {
          throw error; // If it's a different error, rethrow it
        }
      }

      // Try to create a SendBird user for the owner of the car
      const OwnerName = getCarById?.data?.createdBy?.fullName;
      const profilePhoto = getCarById?.data?.createdBy?.profilePhoto;
      try {
        await SenBridUser.createSendBirdUser(OwnerId, OwnerName, profilePhoto);
        console.log("Created SendBird user for the owner");
      } catch (error) {
        if (error.response?.data?.code === 400202) {
          console.log(
            `Owner ${OwnerId} already exists in SendBird, proceeding...`
          );
        } else {
          throw error; // If it's a different error, rethrow it
        }
      }

      // Create a chat channel between the current user and the owner
      await SenBridUser.CreateSendBirdChannel(
        [userId, OwnerId],
        getCarById?.data?.listingTitle
      );
      console.log("Created SendBird chat channel");

      // Navigate to the profile page after creating the chat
      navigate(`/profile/${userInfo._id}`);
    } catch (error) {
      console.error("Error creating chat channel:", error);
    }
  };

  const iconMap = {
    listingTitle: <FaClipboardList />,
    tagline: <FaTag />,
    category: <FaCar />,
    condition: <TiTick />,
    make: <HiColorSwatch />,
    model: <FaCarSide />,
    year: <FaRegCalendarAlt />,
    driveType: <FaRoad />,
    transmission: <FaTransgenderAlt />,
    fuelType: <BsFillFuelPumpFill />,
    mileage: <IoIosSpeedometer />,
    cylinder: <FaCircle />,
    door: <FaDoorClosed />,
    offerType: <FaTags />,
  };

  const addToCartHandler = (item) => {
    console.log("Adding item to cart:", item.data);
    dispatch(addToCart(item.data));
    // console.log("Adding item to cart:", item.data);
    // dispatch(addToCart(item.data));
    navigate("/cart");
  };

  return (
    <div className="md:flex md:px-20 md:my-10 md:gap-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading car details.</div>
      ) : (
        <>
          <div>
            <h2 className="text-3xl font-semibold py-5">
              {getCarById?.data?.listingTitle}
            </h2>
            <div className="flex md:mx-5">
              <span className="flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2 text-sm md:text-md px-4">
                <MdDateRange /> {getCarById?.data?.year}
              </span>
              <span className="flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2 text-sm md:text-md px-4">
                <MdOutlineSpeed /> {getCarById?.data?.mileage} Miles
              </span>
              <span className="flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2 text-sm md:text-md px-4">
                <GiGearStickPattern /> {getCarById?.data?.transmission}
              </span>
              <span className="flex items-center bg-blue-100 text-blue-500 rounded-3xl md:py-1 md:mx-2 text-sm md:text-md px-4">
                <LuFuel /> {getCarById?.data?.fuelType}
              </span>
            </div>
            <div>
              <img
                src={`${BASE_URL}${getCarById?.data?.images[0]}`}
                alt="Car"
                className="md:w-[50%] md:ms-10 my-4 cursor-pointer hover:w-[60%] rounded-lg transition-all duration-300"
              />
            </div>
            <h2 className="py-5 px-2 mt-5 text-2xl font-semibold">
              Description
            </h2>
            <p className="px-2">{getCarById?.data?.description}</p>

            <div className="my-5 shadow-lg md:px-10 px-5 py-5 cursor-pointer hover:shadow-2xl">
              <h2 className="py-5 text-2xl font-semibold">Features</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {getCarById?.data?.features &&
                  Object.entries(getCarById?.data?.features)
                    .filter(([_, value]) => value === true)
                    .map(([feature, _], index) => (
                      <li key={index} className="flex items-center">
                        <SiTicktick className="text-blue-600 mx-2" />
                        {feature}
                      </li>
                    ))}
              </ul>
            </div>

            <FinancingCalculator />
          </div>

          <div className="w-full">
            <div className="shadow-lg flex flex-col justify-center px-2 hover:shadow-2xl">
              <h2 className="text-md font-semibold py-4">Total Price</h2>
              <h1 className="text-4xl font-semibold">
                ${getCarById?.data?.sellingPrice}
              </h1>
              <div className="flex justify-between">
                <button className="bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500 my-5">
                  Buy Now
                </button>
                <button
                  className="bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500 my-5"
                  onClick={() => addToCartHandler({ ...getCarById, qty: 1 })}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="shadow-lg hover:shadow-2xl rounded-md px-4 my-10 max-w-md">
              <ul>
                {getCarById?.data &&
                  Object.keys(getCarById?.data)
                    .filter(
                      (key) =>
                        ![
                          "description",
                          "images",
                          "createdAt",
                          "updatedAt",
                          "__v",
                          "originalPrice",
                          "sellingPrice",
                          "features",
                          "_id",
                        ].includes(key)
                    )
                    .map((key, index) => (
                      <div key={index}>
                        <li className="flex items-center gap-2 py-3">
                          <span className="text-blue-500 bg-blue-100 rounded-full">
                            {iconMap[key]}
                          </span>
                          {key}{" "}
                          <span className="ms-auto pe-5">
                            {getCarById?.data[key]?.toString()}
                          </span>
                        </li>
                        <hr />
                      </div>
                    ))}
              </ul>
            </div>

            <div className="shadow-lg hover:shadow-2xl flex flex-col items-center py-5 max-w-md">
              <h1 className="text-2xl font-semibold">Owner's Details</h1>
              <img
                src={getCarById?.data?.createdBy?.profilePhoto}
                alt="Owner"
                width="40%"
              />
              <h2 className="font-semibold">
                {getCarById?.data?.createdBy?.fullName}
              </h2>
              <button
                className="bg-blue-600 py-2 text-white rounded-md cursor-pointer px-4 hover:bg-blue-500 mx-10 my-5"
                onClick={OnMessageOwnerButtonClick}
              >
                Message Owner
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListDetailPage;
