import { apiSlice } from "./apiSlice";
import { LISTING_URL, UPLOAD_IMAGE } from "../constant";

const listingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => ({
        url: `${LISTING_URL}/allListings`,
      }),
      providesTags: ["CarProduct"],
    }),

    getListById: builder.query({
      query: (id) => ({
        url: `${LISTING_URL}/${id}`,
      }),
      providesTags: ["CarProduct"],
    }),
    addNewListing: builder.mutation({
      query: (data) => ({
        url: `${LISTING_URL}/addListing`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CarProduct"],
    }),

    editListing: builder.mutation({
      query: ({ data, id }) => ({
        url: `${LISTING_URL}/edit/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["CarProduct"],
    }),

    deleteListing: builder.mutation({
      query: (id) => ({
        url: `${LISTING_URL}/delete/${id}`,
        method: "DELETe",
      }),
      invalidatesTags: ["CarProduct"],
    }),

    recentAddLists: builder.query({
      query: () => ({
        url: `${LISTING_URL}/recentListings`,
      }),
      providesTags: ["CarProduct"],
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
      providesTags: ["CarProduct"],
    }),

    getNewLIstings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/newListings`,
      }),
      providesTags: ["CarProduct"],
    }),

    getUsedListings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/usedListings`,
      }),
      providesTags: ["CarProduct"],
    }),

    getCertifiedListings: builder.query({
      query: () => ({
        url: `${LISTING_URL}/certifiedListings`,
      }),
      providesTags: ["CarProduct"],
    }),
    getSedanCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/sedanCategory`,
      }),
      providesTags: ["CarProduct"],
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
      providesTags: ["CarProduct"],
    }),

    getConvertibleCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/ConvertibleCategory`,
      }),
      providesTags: ["CarProduct"],
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
      providesTags: ["CarProduct"],
    }),

    getTruckCategory: builder.query({
      query: () => ({
        url: `${LISTING_URL}/TruckCategory`,
      }),
      providesTags: ["CarProduct"],
    }),

    searchListings: builder.query({
      query: (queryParams) => ({
        url: `${LISTING_URL}/search`,
        method: "GET",
        params: queryParams, // Pass search parameters as query params
      }),
      providesTags: ["CarProduct"],
    }),
  }),
});

export const {
  useGetAllListsQuery,
  useGetListByIdQuery,
  useAddNewListingMutation,
  useEditListingMutation,
  useDeleteListingMutation,
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
  useSearchListingsQuery,
} = listingApiSlice;
