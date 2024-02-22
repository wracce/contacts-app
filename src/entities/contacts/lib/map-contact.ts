import { UserDto } from "../api/types/user-dto"
import { Contact } from "../model/types/contact"
import { mapGender } from "./map-gender"

export function mapContact(dto: UserDto): Contact {
  return {
    id: dto.login.uuid,
    email: dto.email,
    firstName: dto.name.first,
    lastName: dto.name.last,
    gender: mapGender(dto.gender),
  }
}
