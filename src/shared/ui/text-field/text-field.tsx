import { HTMLInputTypeAttribute, useId } from "react"

import css from "./text-field.module.styl"

type Props = {
  name: string
  label?: string | undefined
  type?: HTMLInputTypeAttribute | undefined
  defaultValue?: string | undefined
  required?: boolean
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  pattern?: string | undefined
  patternTitle?: string | undefined
}

export const TextField = ({
  label = "",
  type = "text",
  name,
  defaultValue,
  required,
  onChange,
  pattern,
  patternTitle,
}: Props) => {
  const id = useId()
  return (
    <div className={css.input__wrapper}>
      <label htmlFor={id} className={css.input__content}>
        <input
          className={css.input__textfield}
          defaultValue={defaultValue}
          required={required}
          name={name}
          type={type}
          id={id}
          placeholder="&nbsp;"
          onChange={onChange}
          pattern={pattern}
          title={patternTitle}
        />
        <span className={css.input__span}>{label}</span>
      </label>
    </div>
  )
}
