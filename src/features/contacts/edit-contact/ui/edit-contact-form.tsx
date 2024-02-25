import { DeleteContactButton } from ".."
import { useState } from "react"

import {
  ContactsPartForm,
  ContactsPartFormData,
  updateContact,
  useContact,
} from "@entities/contacts"
import { Contact } from "@entities/contacts/model/types/contact"
import { Gender } from "@entities/contacts/model/types/gender"

import { useAppDispatch } from "@shared/model/hooks/store-hooks"
import { Button, Typography } from "@shared/ui"

import css from "./edit-contact-form.module.styl"

type Prop = {
  onEdited?: (() => void) | undefined
  id: number
}

export const EditContactForm = ({ onEdited, id }: Prop) => {
  const appDispatch = useAppDispatch()
  const contact = useContact(id)
  const [valid, setValid] = useState(true)

  if (contact === undefined) return

  function handleInvalid(e: React.FormEvent<HTMLFormElement>) {
    setValid(e.currentTarget.checkValidity())
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    // TODO вынести в lib
    const contact: Contact = {
      id,
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      gender: Gender[formData.get("gender") as keyof typeof Gender],
    }

    appDispatch(updateContact(contact))
    onEdited?.()
  }

  const defaultData: ContactsPartFormData = {
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
    gender: contact.gender,
  }

  return (
    <form
      className={css["contacts__edit-contact-form"]}
      onSubmit={handleSubmitForm}
      onInvalid={handleInvalid}
    >
      <ContactsPartForm defaultData={defaultData}></ContactsPartForm>
      {!valid && (
        <Typography variant="error">
          *Некоторые поля заполнены не корректно
        </Typography>
      )}
      <div className={css["contacts__delete-contact"]}>
        <DeleteContactButton id={id} />
        <Button type="submit" width="549px">
          Редактировать
        </Button>
      </div>
    </form>
  )
}
