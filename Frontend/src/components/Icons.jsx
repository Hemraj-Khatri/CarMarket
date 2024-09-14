import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
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

// Map icon names to React components
const icons = {
  FaClipboardList,
  FaTag,
  FaCar,
  FaCarSide,
  FaRoad,
  FaTransgenderAlt,
  FaDoorClosed,
  FaCircle,
  FaTags,
  FaRegCalendarAlt,
  CiDollar,
  HiColorSwatch,
  TiTick,
  BsFillFuelPumpFill,
  IoIosSpeedometer,
};

function Icons({ icon }) {
  const IconComponent = icons[icon]; // Get the correct icon component
  return IconComponent ? (
    <span className="bg-blue-200 rounded-full p-1">
      <IconComponent className="text-blue-800" />
    </span>
  ) : null;
}

export default Icons;
