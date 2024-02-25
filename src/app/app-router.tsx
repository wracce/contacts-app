import { Navigate, RouteObject, createHashRouter } from "react-router-dom"

import { ContactsPage } from "@pages/contacts/contacts-page"
import { LoginPage } from "@pages/login/login-page"

import { routeNames } from "@shared/lib/route-names"

import { appLayout } from "./app-layout"
import { AuthGuard } from "./auth/auth-guard"
import { GuestGuard } from "./auth/guest-guard"

// Only for Auth
const guardRoutes: RouteObject[] = [
  { path: routeNames.contacts, element: <ContactsPage /> },
]

// Only for Guests
const guestRoutes: RouteObject[] = [
  { path: routeNames.login, element: <LoginPage /> },
]

// For Everybody
const otherRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to={routeNames.contacts} replace /> },
]

export const appRouter = createHashRouter([
  {
    element: appLayout,
    children: [
      { element: <AuthGuard />, children: guardRoutes },
      { element: <GuestGuard />, children: guestRoutes },
      ...otherRoutes,
    ],
  },
])
