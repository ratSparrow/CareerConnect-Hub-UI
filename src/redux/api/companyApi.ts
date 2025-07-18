/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../helpers/utils/saveData";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const COMPANY_URL = "/company";

  const userData = localStorage.getItem("userInfo")
  const parseData = JSON.parse(userData)
  const token = parseData?.token
const headers = {
  Authorization: `${token}`
}

export const companyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCompany: build.mutation({
      query: ({ data }) => ({
        url: COMPANY_URL,
        method: "POST",
        body: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.company],
    }),
    companies: build.query({
      query: (arg: Record<string, any>) => ({
        url: COMPANY_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.company],
    }),
    company: build.query({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.company],
    }),
    updateCompany: build.mutation({
      query: (data) => ({
        url: `${COMPANY_URL}/${data.id}`,
        method: "PATCH",
        data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.company],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `${COMPANY_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.company],
    }),
  }),
});

export const {
  useAddCompanyMutation,
  useCompaniesQuery,
  useCompanyQuery,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
