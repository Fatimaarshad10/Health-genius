import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiEndpoint from "../config/environment";

export const DoctorServerApi = createApi({
  reducerPath: "DoctorServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiEndpoint}/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Doctor"],

  endpoints: (builder) => ({
    // Update
    update: builder.mutation({
      query: ({ id, payload }) => ({
        url: `doctor/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Doctor"],
    }),
  }),
});

export const {
  useUpdateMutation,
} = DoctorServerApi;
