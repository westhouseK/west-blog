import { DefalultResponceType } from "./ResponceInterface";

export type Blog = DefalultResponceType & {
  title: string;
  body: string;
  category: string;
};

