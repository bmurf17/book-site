export interface Book {
    id: string;
    img: string;
    title: string;
    author: string;
    pageCount: number;
    genre: string;
    uid: string;
    dateRead: Date;
    rating: number;
}

export const tempBook: Book = {
    id: "1",
    img: "http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Mistborn",
    author: "Brandon Sanderson",
    pageCount: 400,
    genre: "Fiction",
    uid: "",
    dateRead: new Date(),
    rating: 4,
}