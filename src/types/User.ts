export interface User {
  id: number;
  dateCreated?: Date;
  img: string;
  name: string;
}

export const tempUser = {
  id: 0,
  img: "",
  name: "",
};
