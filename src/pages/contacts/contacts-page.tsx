import { ContactsTable } from "@widgets/contacts-table"

import { AddContactModalButton } from "@features/contacts/add-contact"
import { LogoutButton } from "@features/session/logout"

import { Typography } from "@shared/ui"

import css from "./contacts-page.module.styl"

export const ContactsPage = () => {
  return (
    <>
      <header className={css.contacts__header}>
        <Typography variant="h1">Иванов И.И.</Typography>
        <div className={css.contacts__empty}></div>
        <AddContactModalButton />
        <LogoutButton />
      </header>
      <main className={css.contacts__content}>
        <ContactsTable />
      </main>
    </>
  )
}
