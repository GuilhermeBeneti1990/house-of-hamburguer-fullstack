export interface IUser {
  id: string;
  name: string;
  email: string;
  cep: string;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}
