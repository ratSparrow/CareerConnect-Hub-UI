/* eslint-disable @typescript-eslint/no-explicit-any */

import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const MYAPPLICATION_URL = "/applied-job/applicant";


export const myApplicationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    job: build.query({
      query: (email) => ({
        url: `${MYAPPLICATION_URL}/${email}`,
        method: "GET",
      }),
      providesTags: [tagTypes.myApplication],
    }),
  }),
});

export const { useJobQuery } = myApplicationApi;
