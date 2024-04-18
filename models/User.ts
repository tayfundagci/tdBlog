export interface IUser {
  username: string;
  email: string;
  isAdmin: boolean;
  password?: string;
  img?: string;
}

export class mdlUser implements IUser {
  constructor(
    public username: string,
    public email: string,
    public isAdmin: boolean,
    public password?: string,
    public img?: string
  ) { }
}