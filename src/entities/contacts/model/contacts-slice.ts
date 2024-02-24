import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { randomuserApi } from "../../../shared/api/randomuser-api"
import { calculateNewContactId } from "../lib/calculate-new-contact-id"
import { mapContacts } from "../lib/map-contacts"
import { Contact } from "./types/contact"

type StateType = {
  contacts: Contact[]
}

const initialState: StateType = { contacts: [] }

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    pushContact: (state, { payload }: PayloadAction<Contact>) => {
      const contact = payload
      contact.id = calculateNewContactId(state.contacts)
      state.contacts.push(contact)
    },
    deleteContact: (state, { payload }: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload,
      )
    },
    updateContact: (state, { payload }: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === payload.id,
      )
      if (index >= 0) state.contacts[index] = payload
    },
  },
  extraReducers: (builder) =>
    builder
      // auto setContacts
      .addMatcher(
        randomuserApi.endpoints.generate.matchFulfilled,
        (state, { payload }) => {
          // TODO Через присвоение не работает
          // state.length = 0
          // state.push(...mapContacts(payload))
          state.contacts = mapContacts(payload)
        },
      ),
})

export const { pushContact, deleteContact, updateContact } =
  contactsSlice.actions
