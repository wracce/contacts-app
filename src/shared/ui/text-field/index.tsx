import cn from "classnames"
import css from "./index.module.styl"
import { HTMLInputTypeAttribute, useId } from "react"

type Props = {
  name: string
  label?: string | undefined
  type?: HTMLInputTypeAttribute | undefined
  defaultValue?: string | undefined
  required?: boolean
}

// Source: https://codepen.io/lucasyem/pen/ZEEYKdj
export const TextField = ({
  label = "",
  type = "text",
  name,
  defaultValue,
  required,
}: Props) => {
  const id = useId()
  return (
    <div className={css.wrapper}>
      <label htmlFor={id} className={css["inp"]}>
        <input required={required} name={name} type={type} id={id} placeholder="&nbsp;" />
        <span className={css["label"]}>{label}</span>
      </label>
    </div>
  )
}
