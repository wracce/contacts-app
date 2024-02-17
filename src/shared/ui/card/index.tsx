import cn from "classnames"
import css from "./index.module.styl"

type Props = {
  children: React.ReactNode
  className?: string|undefined
}

export const Card = ({ children,className }: Props) => {
  return <div className={cn(css.root,className)}>{children}</div>
}
