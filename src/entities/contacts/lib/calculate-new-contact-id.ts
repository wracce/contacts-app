import { Contact } from "../model/types/contact"

export function calculateNewContactId(contacts: Contact[]) {
  return contacts.length
}
