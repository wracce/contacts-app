import cn from "classnames"

import css from "./button.module.styl"

type Props = {
  children: React.ReactNode
  size?: "m" | "l"
  variant?: "primary" | "secondary" | "info"
  width?: string | undefined
  onClick?: () => void | undefined
  type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({
  children,
  size = "l",
  variant = "primary",
  width,
  onClick,
  type = "button"
}: Props) => {
  const css_size = `button--size_${size}`
  const css_variant = `button--variant_${variant}`

  return (
    <button
      type={type}
      className={cn(css.button, css[css_size], css[css_variant])}
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
