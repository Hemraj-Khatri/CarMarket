import { apiSlice } from "./apiSlice";
import { LISTING_URL, UPLOAD_IMAGE } from "../constant";

const listingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => ({
        url: `${LISTING_URL}/allListings`,
      }),
    }),
    addNewListing: builder.mutation({
      query: (data) => ({
        url: `${LISTING_URL}/addListing`,
        method: "POST",
        body: data,
      }),
    }),

    recentAddLists: builder.query({
      query: () => ({
        url: `${LISTING_URL}/recentListings`,
      }),
    }),

    uploadImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_IMAGE}/upload`,
        method: "POST",
        body: data,
      }),
    }),

    getCarById: builder.query({
      query: (id) => ({
        url: `${LISTING_URL}/${id}`,
      }),
    }),

    getNewLIstings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/newListings`,
      }),
    }),

    getUsedListings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/usedListings`,
      }),
    }),

    getCertifiedListings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/certifiedListings`,
      }),
    }),
    getSedanCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/sedanCategory`,
      }),
    }),

    getElectricCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/electricCategory`,
      }),
    }),

    getSUVCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/SUVCategory`,
      }),
    }),

    getConvertibleCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/ConvertibleCategory`,
      }),
    }),
    getCoupeCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/CoupeCategory`,
      }),
    }),
    getVanCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/VanCategory`,
      }),
    }),

    getTruckCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/TruckCategory`,
      }),
    }),
  }),
});

export const {
  useGetAllListsQuery,
  useAddNewListingMutation,
  useUploadImageMutation,
  useRecentAddListsQuery,
  useGetCarByIdQuery,
  useGetNewLIstingsQuery,
  useGetUsedListingsQuery,
  useGetCertifiedListingsQuery,
  useGetSedanCategoryQuery,
  useGetElectricCategoryQuery,
  useGetSUVCategoryQuery,
  useGetConvertibleCategoryQuery,
  useGetCoupeCategoryQuery,
  useGetVanCategoryQuery,
  useGetTruckCategoryQuery,
} = listingApiSlice;
