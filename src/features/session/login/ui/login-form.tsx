import { useState } from "react"

import { useGenerateMutation } from "@shared/api/randomuser-api"
import { Button, TextField, Typography } from "@shared/ui"

export const LoginForm = () => {
  const [login] = useGenerateMutation()
  const [seed, setSeed] = useState("")
  const [valid, setValid] = useState(true)

  function handleChangeSeed(event: React.ChangeEvent<HTMLInputElement>) {
    setSeed(event.target.value)
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login(seed)
  }

  function handleInvalid(e: React.FormEvent<HTMLFormElement>) {
    // HACK for visivle checkValidity
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValid((e.target as any).checkValidity())
 }

  return (
    <form onSubmit={handleLogin} onInvalid={handleInvalid}>
      <TextField
        name="seed"
        label="Seed"
        onChange={handleChangeSeed}
        pattern="[a-zA-Z]+"
        patternTitle="Только буквы латинского алфавита"
      />
      {!valid && (
        <Typography variant="error">*Поле заполнено не корректно</Typography>
      )}
      <Button size="l" variant="primary" width="318px" type="submit">
        Войти
      </Button>
    </form>
  )
}
