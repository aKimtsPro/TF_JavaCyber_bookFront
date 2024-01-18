import {IAuthor} from "./author.model";

export interface IBook {
  id: number,
  title: string,
  author: IAuthor
}
