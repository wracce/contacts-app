import { createSlice } from "@reduxjs/toolkit"

import { randomuserApi } from "@shared/api/randomuser-api"

import {
  clearLocalStorageSeed,
  getLocalStorageSeed,
  setLocalStorageSeed,
} from "../lib/local-storage-seed"
import { Session } from "./types/session"

const initialState: Session = {
  seed: getLocalStorageSeed(),
  isAuth: false,
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    clearSession: (state) => {
      state.seed = null
      state.isAuth = false
      clearLocalStorageSeed()
    },
  },
  extraReducers: (builder) =>
    builder
      // auto setSeed from API call
      .addMatcher(
        randomuserApi.endpoints.generate.matchFulfilled,
        (state, { meta }) => {
          state.seed = meta.arg.originalArgs
          state.isAuth = true
          setLocalStorageSeed(state.seed)
        },
      ),
})

export const { clearSession } = sessionSlice.actions
