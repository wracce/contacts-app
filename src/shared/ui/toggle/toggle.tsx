import cn from "classnames"
import { useState } from "react"

import css from "./toggle.module.styl"

type ToggleEntityProp = {
  name: string
  value: string
}
type Props = {
  name: string
  data: Array<ToggleEntityProp>
  className?: string | undefined
  defaultValue?: string
}

export const Toggle = ({
  data,
  className,
  name,
  defaultValue = data[0].value,
}: Props) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <div className={cn(css.toggle__list, className)}>
      <input type="hidden" name={name} value={value}></input>
      {data.map((tgl) => (
        <button
          type="button"
          key={tgl.value as string}
          disabled={value === tgl.value}
          className={css.toggle__button}
          onClick={() => {
            setValue(tgl.value)
          }}
        >
          {tgl.name}
        </button>
      ))}
    </div>
  )
}
