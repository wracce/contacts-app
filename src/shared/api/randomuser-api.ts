// import { mapContacts } from "../../entities/session/lib/map-contacts"
// import { Contact } from "../../entities/session/model/types/contact"
import { ApiTag } from "@shared/api/api-tag"
import { baseApi } from "@shared/api/base-api"
import { config } from "@shared/lib/config"

import { LoginDto } from "./types/login-dto"

export const randomuserApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      generate: builder.mutation<LoginDto, string>({
        query: (seed) => {
          return {
            url: `/?seed=${seed}&results=${config.COUNT_USERS}`,
            method: "GET",
          }
        },
        // transformResponse: mapContacts,
        invalidatesTags: [ApiTag.SESSION_TAG],
      }),
    }
  },
})

export const { useGenerateMutation } = randomuserApi
