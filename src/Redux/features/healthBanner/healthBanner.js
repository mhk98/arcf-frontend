import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const healthBannerApi = createApi({
  reducerPath: "healthBannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["healthBanners"], // Define the tag type
  endpoints: (build) => ({
    createHealthBanner: build.mutation({
      query: (data) => ({
        url: "/healthBanner/create-healthBanner",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["healthBanners"],
    }),

    deleteHealthBanner: build.mutation({
      query: (id) => ({
        url: `/healthBanner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["healthBanners"],
    }),

    updateHealthBanner: build.mutation({
      query: ({ id, data }) => ({
        url: `/healthBanner/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["healthBanners"],
    }),

    getAllHealthBanner: build.query({
      query: () => ({
        url: "/healthBanner",
      }),
      providesTags: ["healthBanners"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateHealthBannerMutation,
  useGetAllHealthBannerQuery,
  useDeleteHealthBannerMutation,
  useUpdateHealthBannerMutation,
} = healthBannerApi;
