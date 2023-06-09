export interface Book {
  id: string;
  img: string;
  title: string;
  author: string;
  pagecount: number;
  genre: string;
  uid: string;
  dateread?: Date;
  rating: number;
}

export interface AddBookDto {
  img: string;
  title: string;
  author: string;
  pageCount: number;
  genre: string;
  user: number;
  dateRead?: Date;
  rating: number;
}

export const tempBook: Book = {
  id: "1",
  img: "http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title: "Mistborn",
  author: "Brandon Sanderson",
  pagecount: 400,
  genre: "Fiction",
  uid: "",
  dateread: new Date(),
  rating: 4,
};
