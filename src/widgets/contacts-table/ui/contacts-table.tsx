import { EditContactModalButton } from "@features/contacts/edit-contact"

import { useContactSelector } from "@entities/contacts"

import { Button, Table, TableColumnProps } from "@shared/ui"

import css from "./contacts-table.module.styl"

const headers: Array<TableColumnProps> = [
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

export const ContactsTable = () => {
  const { contacts } = useContactSelector()

  const data = contacts.map((contact) => ({
    id: contact.id,
    lastName: contact.lastName,
    firstName: contact.firstName,
    gender: contact.gender,
    email: contact.email,
    actions: contact.id !== null && <EditContactModalButton id={contact.id} />,
  }))

  return (
    <div className={css.contacts__table}>
      <Table columns={headers} data={data} idColumnName="id" />
    </div>
  )
}
