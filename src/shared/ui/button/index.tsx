import cn from "classnames"
import css from "./index.module.styl"


type Props = {
  children: React.ReactNode
  size?: "s" | "m"
  variant?: "primary" | "secondary"
}

export const Button = ({ children, size = "m", variant = "primary" }: Props) => {
  const css_size = `root--size_${size}`
  const css_variant = `root--variant_${variant}`

  return (
    <button className={cn(css.root, css[css_size], css[css_variant])}>{children}</button>
  )
}
