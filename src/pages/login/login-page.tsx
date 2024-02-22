import { LoginForm } from "@features/session/login"

import { Card, Typography } from "@shared/ui"

import css from "./login-page.module.styl"

export const LoginPage = () => {
  return (
    <div className={css["login-form__container"]}>
      <Card>
        <div className={css["login-form__content"]}>
          <Typography
            variant="h2"
            className={css["login-form__header"]}
            align="center"
          >
            Добро пожаловать
          </Typography>
          <LoginForm />
        </div>
      </Card>
    </div>
  )
}
