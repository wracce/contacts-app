import { EditContactModalButton } from "@features/contacts/edit-contact"

import { Gender, useContactSelector } from "@entities/contacts"

import { Table } from "@shared/ui"

import { contactsColumns } from "../model/contacts-columns.data"

import css from "./contacts-table.module.styl"

export const ContactsTable = () => {
  const { contacts } = useContactSelector()
  // TODO перенести в lib
  const data = contacts.map((contact) => ({
    id: contact.id,
    lastName: contact.lastName,
    firstName: contact.firstName,
    // TODO перенести в lib
    gender: contact.gender === Gender.MALE ? "Мужчина" : "Женщина",
    email: contact.email,
    actions: contact.id !== null && <EditContactModalButton id={contact.id} />,
  }))

  return (
    <div className={css.contacts__table}>
      <Table columns={contactsColumns} data={data} idColumnName="id" />
    </div>
  )
}
