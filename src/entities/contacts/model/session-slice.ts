import { createSlice } from "@reduxjs/toolkit"

const initialState: Session = {
  seed: undefined,
}

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    cleanSeed: (state) => {
      state.seed = undefined
    },
  },
  extraReducers: (builder) =>
    builder
      // login
      .addMatcher(sessionApi.endpoints.login.matchFulfilled, (state, { meta }) => {
        state.seed = meta.arg.originalArgs
      }),
})

export const { logout } = sessionSlice.actions
// export default sessionSlice.reducer
