import { RouterProvider } from "react-router-dom"
import { appRouter } from "./app-router"
import { Provider as StoreProvider } from "react-redux"
import { appStore } from "./app-store"

import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "./style.styl"

export const App = () => {
  return (
    <>
      <StoreProvider store={appStore}>
        <RouterProvider router={appRouter} />
      </StoreProvider>
    </>
  )
}
