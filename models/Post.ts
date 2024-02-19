export interface IPost {
  title: string
  desc: string
  userId: string
  slug: string
  img?: string
}

export class mdlPost implements IPost {
  constructor(
    public title: string,
    public desc: string,
    public userId: string,
    public slug: string,
    public img?: string,
  ) { }
}