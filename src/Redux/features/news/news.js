import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const NewsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["News"], // Define the tag type
  endpoints: (build) => ({
    createNews: build.mutation({
      query: (data) => ({
        url: "/news/create-news",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),

    deleteNews: build.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),

    updateNews: build.mutation({
      query: ({ id, data }) => ({
        url: `/news/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),

    getAllNews: build.query({
      query: (status) => ({
        url: "/news",
      }),
      providesTags: ["News"],
    }),
  }),
});

export const {
  useCreateNewsMutation,
  useGetAllNewsQuery,
  useGetAllCategoryNewsQuery,
  useDeleteNewsMutation,
  useUpdateNewsMutation,
} = NewsApi;
