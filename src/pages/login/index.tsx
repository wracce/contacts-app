import { Button, Card, TextField, Typography } from "@shared/ui"

import css from "./index.module.styl"

export const LoginPage = () => {
  return (
    <div className={css["login-form__container"]}>
      <Card>
        <div className={css["login-form__content"]}>
          <Typography variant="h1" className={css["login-form__header"]} align="center">
            Добро пожаловать
          </Typography>
          <TextField name="seed" label="Seed"/>
          <Button size="m" variant="primary" width="318px">
            Войти
          </Button>
        </div>
      </Card>
    </div>
  )
}
