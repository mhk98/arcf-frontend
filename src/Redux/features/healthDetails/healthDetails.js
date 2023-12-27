import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const healthDetailsApi = createApi({
  reducerPath: "healthDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["healthDetails"], // Define the tag type
  endpoints: (build) => ({
    createHealthDetails: build.mutation({
      query: (data) => ({
        url: "/healthDetails/create-healthDetails",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["healthDetails"],
    }),

    deleteHealthDetails: build.mutation({
      query: (id) => ({
        url: `/healthDetails/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["healthDetails"],
    }),

    updateHealthDetails: build.mutation({
      query: ({ id, data }) => ({
        url: `/healthDetails/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["healthDetails"],
    }),

    getAllHealthDetails: build.query({
      query: () => ({
        url: "/healthDetails",
      }),
      providesTags: ["healthDetails"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHealthDetailsMutation,
  useGetAllHealthDetailsQuery,
  useDeleteHealthDetailsMutation,
  useUpdateHealthDetailsMutation,
} = healthDetailsApi;
