import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddListingPage from "./pages/AddListingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ListingProfilePage from "./pages/ListingProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Signup from "./pages/SignupPage.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import ListDetailPage from "./pages/ListDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import NewPage from "./pages/NewPage.jsx";
import SendMessage from "./pages/SendMessage.jsx";
import ConditionPage from "./pages/ConditionPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="profile" element={<ListingProfilePage />} />
      <Route path="addList" element={<AddListingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="new" element={<NewPage />} />
      <Route path="sendMessage" element={<SendMessage />} />
      <Route path="condition" element={<ConditionPage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="list-details/:id" element={<ListDetailPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
