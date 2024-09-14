import React from "react";
import Category from "../components/Category";
import GetInTouchSection from "../components/GetInTouchSection";
import HeroSection from "../components/HeroSection";
import TopCars from "../components/TopCars";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Category />
      <TopCars />
      <GetInTouchSection />
    </div>
  );
}
