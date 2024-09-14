import { createSlice } from "@reduxjs/toolkit";
// import {updateCart} from "../utils/cartUtils"
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        let existingItem = state.cartItems.find(
            (item) => item._id.toString() === action.payload._id.toString()
          );
          if (existingItem) {
            state.cartItems = state.cartItems.map((item) =>
              item._id == existingItem?._id ? action?.payload : item
            );
          } else {
            state.cartItems = [...state.cartItems, action.payload];
          }
      
    },

    removeCart: (state, action) => {}
    //     state.cartItems = state.cartItems.filter(
    //       (item) => item._id != action.payload
    //     );
        
    //   },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
