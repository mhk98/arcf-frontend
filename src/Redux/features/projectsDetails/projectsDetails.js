import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsDetailsApi = createApi({
  reducerPath: "projectsDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  tagTypes: ["projectsDetails"], // Define the tag type
  endpoints: (build) => ({
    createProjectsDetails: build.mutation({
      query: (data) => ({
        url: "/projectsDetails/create-projectsDetails",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projectsDetails"],
    }),

    deleteProjectsDetails: build.mutation({
      query: (id) => ({
        url: `/projectsDetails/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projectsDetails"],
    }),

    updateProjectsDetails: build.mutation({
      query: ({ id, data }) => ({
        url: `/projectsDetails/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["projectsDetails"],
    }),

    getAllProjectsDetails: build.query({
      query: () => ({
        url: "/projectsDetails",
      }),
      providesTags: ["projectsDetails"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateProjectsDetailsMutation,
  useGetAllProjectsDetailsQuery,
  useDeleteProjectsDetailsMutation,
  useUpdateProjectsDetailsMutation,
} = projectsDetailsApi;
