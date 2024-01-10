/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const APPLIED_JOB_URL = "/applied-job";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`,
};

export const appliedJobApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Post
    addAppliedJob: build.mutation({
      query: (data) => ({
        url: APPLIED_JOB_URL,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: [tagTypes.appliedJob],
    }), 
  }),
});

export const {
  useAddAppliedJobMutation
} = appliedJobApi;
