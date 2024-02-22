import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { config } from "@shared/lib/config"

import { ApiTag } from "./api-tag"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.API_URL }),
  tagTypes: Object.values(ApiTag),
  endpoints: () => ({}),
})
