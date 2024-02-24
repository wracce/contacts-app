import { Contact } from "../model/types/contact"

export function mapContactsIds(contacts: Contact[]) {
  return contacts.map((contact, index) => {
    contact.id = index
    return contact
  })
}
