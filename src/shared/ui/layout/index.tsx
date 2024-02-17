import cn from "classnames"
import css from "./index.module.styl"

type Props = {
  children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  return <div className={css.root}>{children}</div>
}
