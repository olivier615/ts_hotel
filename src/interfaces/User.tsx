
export type Email = string
export type Password = string

export interface userLoginForm {
  email: Email,
  password: Password
}

export interface Register1Form extends userLoginForm {
  checkPassword: string
}

export interface Register2Form extends userLoginForm {
  name: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: string,
    detail: string
  }
}
