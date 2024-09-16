import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available, else initialize with an empty array.
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? (() => {
        const cartData = JSON.parse(localStorage.getItem("cartItems"));
        return Array.isArray(cartData) ? cartData : [];
      })()
    : [], // Always default to an empty array if the cart is not in localStorage or invalid.
  shippingAddress: localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {}, // Default to an empty object for shipping address.
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Ensure payload has a valid _id
      if (!action.payload._id) {
        console.error("Invalid item ID:", action.payload);
        return;
      }

      // Find if item already exists in the cart
      let existingItem = state.cartItems.find(
        (item) =>
          item._id && item._id.toString() === action.payload._id.toString()
      );

      if (existingItem) {
        // If item exists, update it
        state.cartItems = state.cartItems.map((item) =>
          item._id && item._id.toString() === existingItem._id.toString()
            ? action.payload
            : item
        );
      } else {
        // Otherwise, add new item
        state.cartItems.push(action.payload); // Use push to add the new item to the array.
      }

      // Save updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem: (state, action) => {
      // Ensure payload has a valid _id
      if (!action.payload) {
        console.error("Invalid item ID:", action.payload);
        return;
      }

      // Remove item from the cart
      state.cartItems = state.cartItems.filter(
        (item) => item._id && item._id.toString() !== action.payload.toString()
      );

      // Save updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem(
        "shippingAddress",
        JSON.stringify(state.shippingAddress)
      );
    },
  },
});

export const { addToCart, removeItem, saveShippingAddress } = cartSlice.actions;
export default cartSlice.reducer;
