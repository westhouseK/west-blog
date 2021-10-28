export type DefalultResponceType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  id: string;
};

export type Responce<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
