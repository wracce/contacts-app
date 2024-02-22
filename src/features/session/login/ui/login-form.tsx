import { useState } from "react"

import { useGenerateMutation } from "@shared/api/randomuser-api"
import { Button, TextField } from "@shared/ui"

export const LoginForm = () => {
  const [login] = useGenerateMutation()
  const [seed, setSeed] = useState("")

  const handleChangeSeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeed(event.target.value)
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(seed)
  }

  return (
    <form onSubmit={handleLogin}>
      <TextField
        name="seed"
        label="Seed"
        onChange={handleChangeSeed}
        pattern="[a-zA-Z]+"
        patternTitle="Только буквы латинского алфавита"
      />
      <Button size="l" variant="primary" width="318px" type="submit">
        Войти
      </Button>
    </form>
  )
}
