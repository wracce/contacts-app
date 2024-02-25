import { TableColumnProp } from "./types/table-column-prop"
import { TableDataProp } from "./types/table-data-prop"

import css from "./table.module.styl"

type Props = {
  columns: Array<TableColumnProp>
  data: Array<TableDataProp>
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
      <table className={css.table__table} cellSpacing="0">
        <thead className={css.table__head}>
          <tr className={css.table__row}>
            {columns.map((col) => (
              <th
                className={css["table__head-cell"]}
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
        <tbody className={css.table__body}>
          {data.map((row) => {
            const rowKey = row[idColumnName] as string
            return (
              <tr key={rowKey} className={css.table__row}>
                {columns.map((col) => {
                  const cellKey = col.name + rowKey
                  return (
                    <td
                      key={cellKey}
                      className={css["table__body-cell"]}
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
