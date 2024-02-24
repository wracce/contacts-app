import { Gender } from "./gender"

export type Contact = {
  id: number | null
  firstName: string
  lastName: string
  gender: Gender
  email: string
}
