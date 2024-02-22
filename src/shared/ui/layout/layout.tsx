
import css from "./layout.module.styl"

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return <div className={css.root}>{children}</div>
}
