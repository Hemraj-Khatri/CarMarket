import { USER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),

    userUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USER_URL}/updateUser/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    contactUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/contactUser`,
        method: "POST",
        body: data,
      }),
    }),

    // updateUserProfile: builder.mutation({
    //   query: (data) => ({
    //     url: `${USER_URL}/profile`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useUserLogoutMutation,
  // useUpdateUserProfileMutation,
  useSignupMutation,
  useContactUserMutation,
  useUserUpdateMutation,
} = userApiSlice;
