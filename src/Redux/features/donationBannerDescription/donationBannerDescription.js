import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donationCategoryDescriptionApi = createApi({
  reducerPath: "donationCategoryDescriptionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  tagTypes: ["donationCategoryDescription"], // Define the tag type
  endpoints: (build) => ({
    createDonationCategoryDescription: build.mutation({
      query: (data) => ({
        url: `/donationCategoryDescription/create-donationCategoryDescription`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donationCategoryDescription"],
    }),

    deleteDonationCategoryDescription: build.mutation({
      query: (id) => ({
        url: `/donationCategoryDescription/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donationCategoryDescription"],
    }),

    updateDonationCategoryDescription: build.mutation({
      query: ({ projectId, subCategoryId, data }) => ({
        url: `/donationCategoryDescription/${projectId}/${subCategoryId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["donationCategoryDescription"],
    }),

    getSingleDonationCategoryDescription: build.query({
      query: (id) => ({
        url: `/donationCategoryDescription/${id}`,
      }),
      invalidatesTags: ["donationCategoryDescription"],
    }),
    getAllDonationCategoryDescription: build.query({
      query: () => ({
        url: "/donationCategoryDescription",
      }),
      providesTags: ["donationCategoryDescription"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateDonationCategoryDescriptionMutation,
  useGetAllDonationCategoryDescriptionQuery,
  useDeleteDonationCategoryDescriptionMutation,
  useUpdateDonationCategoryDescriptionMutation,
} = donationCategoryDescriptionApi;
