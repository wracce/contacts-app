import { createSlice } from "@reduxjs/toolkit"

import { randomuserApi } from "../../../shared/api/randomuser-api"
import { mapContacts } from "../lib/map-contacts"
import { Contact } from "./types/contact"

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [] as Contact[],
  reducers: {
    // invalidate: (state, { payload }) => {
    //     payload.forEach(item => {
    //         state[item] = false
    //     })
    // }
  },
  extraReducers: (builder) =>
    builder
      // auto setContacts
      .addMatcher(
        randomuserApi.endpoints.generate.matchFulfilled,
        (state, { payload }) => {
          // TODO Через присвоение не работает
          state.length = 0
          state.push(...mapContacts(payload))
        },
      ),
})
