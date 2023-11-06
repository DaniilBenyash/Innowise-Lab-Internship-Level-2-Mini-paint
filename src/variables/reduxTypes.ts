interface IAuthCredentials {
  email: string
  password: string
}

interface IUser {
  email: string
  id: string
}

export type { IAuthCredentials, IUser }
