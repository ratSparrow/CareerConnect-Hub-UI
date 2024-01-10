/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const JOB_URL = "/jobs";

const token = getFromLocalStorage("accessToken");
const headers = {
  Authorization: `${token}`,
};

export const jobApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    jobs: build.query({
      query: (arg: Record<string, any>) => ({
        url: JOB_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.jobs],
    }),
    // company applied jobs
    companyAppliedJobs: build.query({
      query: (email) => ({
        url: `/company/${email}`,
        method: "GET",
        params: email,
      }),
      providesTags: [tagTypes.jobs],
    }),
    // applicant applied jobs
    applicatAppliedJobs: build.query({
      query: (email) => ({
        url: `/applicant/${email}`,
        method: "GET",
        params: email,
      }),
      providesTags: [tagTypes.jobs],
    }),
    //Post
    addJob: build.mutation({
      query: (data) => ({
        url: JOB_URL,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: [tagTypes.jobs],
    }),
    // get single jobs by id
    job: build.query({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.jobs],
    }),

    // update single jobs by id
    updateJob: build.mutation({
      query: (data) => ({
        url: `${JOB_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: headers,
      }),
      invalidatesTags: [tagTypes.jobs],
    }),
    // delete single job by id
    deleteJob: build.mutation({
      query: (id) => ({
        url: `${JOB_URL}/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: [tagTypes.jobs],
    }),

    // get filter jobs by id
    jobSearch: build.query({
      query: (data) => ({
        url: `${JOB_URL}?searchTerm=${data.search}&jobType=${data.jobType}&experienceLevel=${data.experienceLevelValue}&salary=${data.sortSalaryValue}`,
        method: "GET",
      }),
      providesTags: [tagTypes.jobs],
    }),
  }),
});

export const {
  useJobsQuery,
  useAddJobMutation,
  useJobQuery,
  useUpdateJobMutation,
  useDeleteJobMutation,
  useJobSearchQuery,
  useCompanyAppliedJobsQuery,
  useApplicatAppliedJobsQuery,
} = jobApi;
