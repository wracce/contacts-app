export type UserDto = {
  name: {
    first: string
    last: string
  }
  email: string
  gender: string
  login: {
    uuid: string
  }
}
