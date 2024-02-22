import cn from "classnames"
import { useState } from "react"

import css from "./toggle.module.styl"

type ToggleEntityProp = {
  name: string
  value: unknown
}
type Props = {
  data: Array<ToggleEntityProp>
  onChange: () => void
  className?: string | undefined
}

export const Toggle = ({ data, className }: Props) => {
  const [value, setValue] = useState(data[0].value)

  return (
    <div className={cn(css.toggle__list, className)}>
      {data.map((tgl) => (
        <button
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
