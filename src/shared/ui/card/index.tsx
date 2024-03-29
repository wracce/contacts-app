import cn from "classnames"

import css from "./card.module.styl"

type Props = {
  children: React.ReactNode
  className?: string | undefined
}

export const Card = ({ children, className }: Props) => {
  return <div className={cn(css.card__container, className)}>{children}</div>
}
