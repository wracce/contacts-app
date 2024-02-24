import { useContactSelector } from "./use-contact-selector"

export const useContact = (id: number) => {
  const { contacts } = useContactSelector()
  return contacts.find((contact) => contact.id === id)
}
