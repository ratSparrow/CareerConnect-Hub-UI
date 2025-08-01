/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const WORK_EXP_URL = "/experience";

  const userData = localStorage.getItem("userInfo")
  const parseData = JSON.parse(userData)
  const token = parseData?.token
const headers = {
  Authorization: `${token}`
}

export const workExperienceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    workExperiences: build.query({
      query: (arg: Record<string, any>) => ({
        url: WORK_EXP_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.workExperience],
    }),
    //Post
    addWorkExperience: build.mutation({
      query: (data) => ({
        url: WORK_EXP_URL,
        method: "POST",
        body: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
    // get single id
    workExperience: build.query({
      query: (id) => ({
        url: `${WORK_EXP_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.workExperience],
    }),
    // update
    updateWorkExperience: build.mutation({
      query: (data) => ({
        url: `${WORK_EXP_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: headers
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
    // delete
    deleteWorkExperience: build.mutation({
      query: (id) => ({
        url: `${WORK_EXP_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.workExperience],
    }),
  }),
});

export const {
  useWorkExperiencesQuery,
  useWorkExperienceQuery,
  useAddWorkExperienceMutation,
  useUpdateWorkExperienceMutation,
  useDeleteWorkExperienceMutation
} = workExperienceApi;
