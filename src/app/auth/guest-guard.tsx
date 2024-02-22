import { Navigate, Outlet } from "react-router-dom"

import { useSessionSelector } from "@entities/session/model/hooks/use-session-selector"

export const GuestGuard = () => {
  const { seed } = useSessionSelector()
  if (seed) return <Navigate to="/" />
  return <Outlet></Outlet>
}
