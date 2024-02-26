import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allEventsApi = createApi({
  reducerPath: "allEventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.arcfbd.org/api/v1",
  }),

  tagTypes: ["events"], // Define the tag type
  endpoints: (build) => ({
    createEvents: build.mutation({
      query: (data) => ({
        url: "/events/create-events",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),

    deleteEvents: build.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["events"],
    }),

    updateEvents: build.mutation({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["events"],
    }),

    getAllEvents: build.query({
      query: () => ({
        url: "/events",
      }),
      providesTags: ["events"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateEventsMutation,
  useGetAllEventsQuery,
  useDeleteEventsMutation,
  useUpdateEventsMutation,
} = allEventsApi;
