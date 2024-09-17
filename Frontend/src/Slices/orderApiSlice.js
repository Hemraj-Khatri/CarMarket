import { ORDER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDER_URL}/addOrder`,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
      }),
    }),

    myOrder: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/myorders/${id}`,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrderByIdQuery, useMyOrderQuery } =
  orderSlice;
