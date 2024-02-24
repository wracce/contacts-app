import cn from "classnames"

import css from "./table.module.styl"

export type TableColumnProps = {
  name: string
  width: number
  value: React.ReactNode
  align: "left" | "center" | "right"
}

export type TableDataProps = {
  [key: string]: React.ReactNode
}

type Props = {
  columns: Array<TableColumnProps>
  data: Array<TableDataProps>
  idColumnName: string
}

export const Table = ({ columns = [], data = [], idColumnName }: Props) => {
  if (columns.length === 0) throw new Error("Columns are empty!")

  const colsNames = [...new Set(columns.map((col) => col.name))]
  if (columns.length !== colsNames.length)
    throw new Error("Columns has duplicate values!")
  if (!colsNames.includes(idColumnName))
    throw new Error("Wrong id column name!")

  return (
    <div className={css.table__viewport}>
      <table className={css.fixed_column} cellSpacing="0">
        <thead className={css.table__head}>
          <tr>
            {columns.map((col) => (
              <th
                key={col.name}
                style={{
                  minWidth: `${col.width}px`,
                  maxWidth: `${col.width}px`,
                  textAlign: col.align,
                }}
              >
                {col.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const rowKey = row[idColumnName] as string
            return (
              <tr key={rowKey}>
                {columns.map((col) => {
                  const cellKey = col.name + rowKey
                  return (
                    <td
                      key={cellKey}
                      style={{
                        minWidth: `${col.width}px`,
                        maxWidth: `${col.width}px`,
                        textAlign: col.align,
                      }}
                    >
                      {row[col.name]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
