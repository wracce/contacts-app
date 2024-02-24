import { useState } from "react"

import { ContactsPartForm, pushContact } from "@entities/contacts"
import { Contact } from "@entities/contacts/model/types/contact"
import { Gender } from "@entities/contacts/model/types/gender"

import { useAppDispatch } from "@shared/model/hooks/store-hooks"
import { Button, Typography } from "@shared/ui"

import css from "./add-contact-form.module.styl"

type Prop = {
  onAdded?: (() => void) | undefined
}

export const AddContactForm = ({ onAdded }: Prop) => {
  const appDispatch = useAppDispatch()
  const [valid, setValid] = useState(true)

  function handleInvalid(e: React.FormEvent<HTMLFormElement>) {
    setValid(e.currentTarget.checkValidity())
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const contact: Contact = {
      id: null,
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      gender: Gender[formData.get("gender") as keyof typeof Gender],
    }

    appDispatch(pushContact(contact))
    onAdded?.()
  }

  return (
    <form
      className={css.contacts__form}
      onSubmit={handleSubmitForm}
      onInvalid={handleInvalid}
    >
      <ContactsPartForm></ContactsPartForm>
      {!valid && (
        <Typography variant="error">
          *Некоторые поля заполнены не корректно
        </Typography>
      )}
      <Button type="submit" width="552px">
        Сохранить
      </Button>
    </form>
  )
}
