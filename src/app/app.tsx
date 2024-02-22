import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import React from "react"
import { Provider as StoreProvider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { appRouter } from "./app-router"
import { appStore } from "./app-store"
import "./app-style.styl"

export const App = () => {
  return (
    <React.StrictMode>
      <StoreProvider store={appStore}>
        <RouterProvider router={appRouter} />
      </StoreProvider>
    </React.StrictMode>
  )
}
