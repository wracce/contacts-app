import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"

import { useSessionSelector } from "@entities/session/model/hooks/use-session-selector"

import { useGenerateMutation } from "@shared/api/randomuser-api"
import { routeNames } from "@shared/lib/route-names"

export const AuthGuard = () => {
  const { seed, isAuth } = useSessionSelector()
  const [update] = useGenerateMutation()

  useEffect(() => {
    if (seed && !isAuth) update(seed)
  }, [isAuth, seed, update])

  if (!seed) return <Navigate to={routeNames.login} />

  return <Outlet></Outlet>
}
