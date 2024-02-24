import { useState } from "react"

import { useGenerateMutation } from "@shared/api/randomuser-api"
import { Button, TextField } from "@shared/ui"

export const LoginForm = () => {
  const [login] = useGenerateMutation()
  const [seed, setSeed] = useState("")

  const handleChangeSeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeed(event.target.value)
  }

  const handleLogin = () => {
    login(seed)
  }

  return (
    <>
      <TextField name="seed" label="Seed" onChange={handleChangeSeed} />
      <Button size="l" variant="primary" width="318px" onClick={handleLogin}>
        Войти
      </Button>
    </>
  )
}
