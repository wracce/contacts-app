import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { contactsSlice } from "@entities/contacts"
import { sessionSlice } from "@entities/session"

import { baseApi } from "@shared/api/base-api"

const appReducers = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

const appMiddlewares = [baseApi.middleware]

export const appStore = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(...appMiddlewares),
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
