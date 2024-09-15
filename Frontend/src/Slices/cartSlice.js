import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available, else initialize with an empty array.
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        state.cartItems = [...state.cartItems, action.payload];
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
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
