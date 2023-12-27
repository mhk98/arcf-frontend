import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsBannerApi = createApi({
  reducerPath: "projectsBannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["projectsBanner"], // Define the tag type
  endpoints: (build) => ({
    createProjectsBanner: build.mutation({
      query: (data) => ({
        url: "/projectsBanner/create-projectsBanner",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projectsBanner"],
    }),

    deleteProjectsBanner: build.mutation({
      query: (id) => ({
        url: `/projectsBanner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projectsBanner"],
    }),

    updateProjectsBanner: build.mutation({
      query: ({ id, data }) => ({
        url: `/projectsBanner/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["projectsBanner"],
    }),

    getAllProjectsBanner: build.query({
      query: () => ({
        url: "/projectsBanner",
      }),
      providesTags: ["projectsBanner"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateProjectsBannerMutation,
  useGetAllProjectsBannerQuery,
  useDeleteProjectsBannerMutation,
  useUpdateProjectsBannerMutation,
} = projectsBannerApi;
