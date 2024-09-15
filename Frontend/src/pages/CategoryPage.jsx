import React from "react";

import { useParams } from "react-router-dom";
import SedanCategoryPage from "./CategoryPage/SedanCategoryPage";
import SUVCategoryPage from "./CategoryPage/SUVCategoryPage";
import ConvertibleCategoryPage from "./CategoryPage/ConvertibleCategoryPage";
import ElectricCategoryPage from "./CategoryPage/ElectricCategoryPage";
import CoupeCategoryPage from "./CategoryPage/CoupeCategoryPage";
import VanCategoryPage from "./CategoryPage/VanCategoryPage";
import TruckCategoryPage from "./CategoryPage/TruckCategoryPage";

const CategoryPage = () => {
  const { name } = useParams();

  // Render different components based on the category name
  switch (name.toLowerCase()) {
    case "sedan":
      return <SedanCategoryPage />;
    case "suv":
      return <SUVCategoryPage />;
    // Add more cases for different categories
    case "convertible":
      return <ConvertibleCategoryPage />;
    case "electric":
      return <ElectricCategoryPage />;

    case "coupe":
      return <CoupeCategoryPage />;

    case "van":
      return <VanCategoryPage />;
    case "truck":
      return <TruckCategoryPage />;
    default:
      return <div>Category not found!</div>;
  }
};

export default CategoryPage;
