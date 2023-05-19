import axios from "axios";
import { AddBookDto, Book } from "../types/Book";

export const fetchBookData = async () => {
  return await axios.get<Book[]>(
    "https://expressjs-postgres-production-5ff7.up.railway.app/book"
  );
};

export const addBookData = async (book: AddBookDto) => {
  return await axios.post(
    "https://expressjs-postgres-production-5ff7.up.railway.app/book",
    book
  );
};
