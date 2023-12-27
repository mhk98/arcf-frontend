import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const healthsApi = createApi({
  reducerPath: "healthsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["healths"], // Define the tag type
  endpoints: (build) => ({
    createHealths: build.mutation({
      query: (data) => ({
        url: "/healths/create-healths",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["healths"],
    }),

    deleteHealths: build.mutation({
      query: (id) => ({
        url: `/healths/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["healths"],
    }),

    updateHealths: build.mutation({
      query: ({ id, data }) => ({
        url: `/healths/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["healths"],
    }),

    getAllHealths: build.query({
      query: () => ({
        url: "/healths",
      }),
      providesTags: ["healths"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHealthsMutation,
  useGetAllHealthsQuery,
  useDeleteHealthsMutation,
  useUpdateHealthsMutation,
} = healthsApi;
