import { LoginDto } from "../api/types/login-dto"
import { Contact } from "../model/types/contact"
import { mapContact } from "./map-contact"

export function mapContacts(dto: LoginDto): Contact[] {
  return dto.results.map(mapContact)
}
