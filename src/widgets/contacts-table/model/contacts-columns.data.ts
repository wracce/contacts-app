import { TableColumnProp } from "@shared/ui"

export const contactsColumns: Array<TableColumnProp> = [
  {
    name: "id",
    width: 52,
    value: "№",
    align: "left",
  },
  {
    name: "lastName",
    width: 130,
    value: "Имя",
    align: "left",
  },
  {
    name: "firstName",
    width: 120,
    value: "Фамилия",
    align: "left",
  },
  {
    name: "gender",
    width: 120,
    value: "Пол",
    align: "left",
  },
  {
    name: "email",
    width: 200,
    value: "Почта",
    align: "left",
  },
  {
    name: "actions",
    width: 128,
    value: "Действия",
    align: "left",
  },
]
