export interface IUser {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img?: string;
}

export class mdlUser implements IUser {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public isAdmin: boolean,
    public img?: string
  ) { }
}