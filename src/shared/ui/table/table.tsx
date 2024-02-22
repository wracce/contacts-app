import cn from "classnames"

import css from "./table.module.styl"

export type TableHeaderProps = {
  name: string
  width: number
  value: React.ReactNode
  align: "left" | "center" | "right"
}

export type TableDataProps = {
  [key: string]: React.ReactNode
}

type Props = {
  headers: Array<TableHeaderProps>
  data: Array<TableDataProps>
}

export const Table = ({ headers = [], data = [] }: Props) => {
  if (headers.length === 0) throw new Error("headers are empty")

  const colsNames = [...new Set(headers.map((col) => col.name))]
  if (headers.length !== colsNames.length)
    throw new Error("headers has duplicate values")

  return (
    <div className={css.table__viewport}>
      <table className={css.fixed_header} cellSpacing="0">
        <thead className={css.table__head}>
          <tr>
            {headers.map((col) => (
              <th style={{ minWidth: `${col.width}px`, textAlign: col.align }}>
                {col.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {headers.map((col) => (
                <td style={{ minWidth: `${col.width}px`, textAlign: col.align }}>
                  {row[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  return <div className={cn(css.root)}>{}</div>
}
