export interface IUserAuthenticated {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface IAuthentication {
  email: string;
  password: string;
  name?: string;
}
