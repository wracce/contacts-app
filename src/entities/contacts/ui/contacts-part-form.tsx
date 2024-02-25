import { Gender } from ".."

import { TextField, Toggle } from "@shared/ui"

import { ContactsPartFormData } from "../model/types/contacts-part-form-data"

import css from "./contacts-part-form.module.styl"

type Props = {
  defaultData?: ContactsPartFormData | undefined
}

const initialData: ContactsPartFormData = {
  email: "",
  firstName: "",
  gender: Gender.MALE,
  lastName: "",
}

export const ContactsPartForm = ({ defaultData = initialData }: Props) => {
  return (
    <>
      <Toggle
        name="gender"
        data={[
          { name: "Мужчина", value: Gender.MALE },
          { name: "Женщина", value: Gender.FEMALE },
        ]}
        defaultValue={defaultData.gender}
        className={css.contacts__gender}
      ></Toggle>
      <div className={css.contacts__fields}>
        <TextField
          required
          pattern="^\p{L}+$"
          patternTitle="Только символы русского или английского алфавита"
          defaultValue={defaultData.lastName}
          name="lastName"
          label="Фамилия*"
        />
        <TextField
          required
          pattern="^\p{L}+$"
          patternTitle="Только символы русского или английского алфавита"
          defaultValue={defaultData.firstName}
          name="firstName"
          label="Имя*"
        />
        <TextField
          required
          type="email"
          defaultValue={defaultData.email}
          name="email"
          label="Email*"
        />
      </div>
    </>
  )
}
