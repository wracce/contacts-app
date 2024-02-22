import { Gender } from "../model/types/gender"

export function mapGender(gender: string): Gender {
  switch (gender) {
    case "male":
      return Gender.MALE
    case "female":
      return Gender.FEMALE
    default:
      throw new Error("Wrong gender! Who is it???")
  }
}
