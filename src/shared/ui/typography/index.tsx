import cn from "classnames"
import css from "./index.module.styl"

type Props = {
  children: React.ReactNode
  variant?: "h1" | undefined
  className?: string | undefined
  align?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | undefined
}

export const Typography = ({ children, variant, className, align }: Props) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(css.root, css["root--h1"], className)}
          style={{ textAlign: align }}
        >
          {children}
        </h1>
      )
    default:
      return <span>{children}</span>
  }
}
