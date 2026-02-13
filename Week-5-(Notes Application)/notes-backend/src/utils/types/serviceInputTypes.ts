export interface IRegisterUserInput {
  fullName: string;
  emailAddress: string;
  password: string;
}

export interface ILoginUserInput {
  emailAddress: string;
  password: string;
}
