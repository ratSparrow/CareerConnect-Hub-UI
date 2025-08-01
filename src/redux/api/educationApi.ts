/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const EDUCATION_URL = "/education";

  const userData = localStorage.getItem("userInfo")
  const parseData = JSON.parse(userData)
  const token = parseData?.token
const headers = {
  Authorization: `${token}`,
};

export const educationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    educations: build.query({
      query: (arg: Record<string, any>) => ({
        url: EDUCATION_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.education],
    }),
    //Post
    addEducation: build.mutation({
      query: (data) => ({
        url: EDUCATION_URL,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: [tagTypes.education],
    }),

    // get single id
    education: build.query({
      query: (id) => ({
        url: `${EDUCATION_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.education],
    }),

    // update
    updateEducation: build.mutation({
      query: (data) => ({
        url: `${EDUCATION_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: headers,
      }),
      invalidatesTags: [tagTypes.education],
    }),
    // delete
    deleteEducation: build.mutation({
      query: (id) => ({
        url: `${EDUCATION_URL}/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: [tagTypes.education],
    }),
  }),
});

export const {
  useEducationsQuery,
  useEducationQuery,
  useAddEducationMutation,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
