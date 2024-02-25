import { useNavigate } from "react-router-dom"

import { clearSession } from "@entities/session"

import { routeNames } from "@shared/lib/route-names"
import { useAppDispatch } from "@shared/model/hooks/store-hooks"
import { Button } from "@shared/ui"

export const LogoutButton = () => {
  const appDispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    appDispatch(clearSession())
    navigate(`../${routeNames.login}`)
  }

  return (
    <Button variant="secondary" size="l" onClick={handleLogout}>
      Выйти
    </Button>
  )
}
