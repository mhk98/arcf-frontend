import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProjectSubCategoryDetailsApi = createApi({
  reducerPath: "ProjectSubCategoryDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),

  tagTypes: ["ProjectSubCategoryDetails"], // Define the tag type
  endpoints: (build) => ({
    createProjectSubCategoryDetails: build.mutation({
      query: (data) => ({
        url: "/projectSubCategoryDetails/create-projectSubCategoryDetails",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ProjectSubCategoryDetails"],
    }),

    deleteProjectSubCategoryDetails: build.mutation({
      query: (id) => ({
        url: `/projectSubCategoryDetails/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProjectSubCategoryDetails"],
    }),

    updateProjectSubCategoryDetails: build.mutation({
      query: ({ id, data }) => ({
        url: `/projectSubCategoryDetails/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["ProjectSubCategoryDetails"],
    }),

    getSingleProjectAllSubCategoryDetails: build.query({
      query: (projectId) => ({
        url: `/projectSubCategoryDescription/${projectId}`,
      }),
      invalidatesTags: ["projectSubCategory"],
    }),

    getSingleProjectSubCategoryDetails: build.query({
      query: ({ projectId, subcategoryId }) => ({
        url: `/ProjectSubCategoryDescription/${projectId}/${subcategoryId}`,
      }),
      invalidatesTags: ["ProjectSubCategoryDetails"],
    }),
    getAllProjectSubCategoryDetails: build.query({
      query: () => ({
        url: "/projectSubCategoryDetails",
      }),
      providesTags: ["ProjectSubCategoryDetails"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateProjectSubCategoryDetailsMutation,
  useGetSingleProjectAllSubCategoryDetailsQuery,
  useGetAllProjectSubCategoryDetailsQuery,
  useGetSingleProjectSubCategoryDetailsQuery,
  useDeleteProjectSubCategoryDetailsMutation,
  useUpdateProjectSubCategoryDetailsMutation,
} = ProjectSubCategoryDetailsApi;
