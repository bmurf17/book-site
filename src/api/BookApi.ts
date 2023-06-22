import axios, { AxiosResponse } from "axios";
import { AddBookDto, Book } from "../types/Book";
import { GoogleBooksResponse } from '../types/GoogleBooksResponse';

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

export const getInfoFromGoogle = async (title: string): Promise<AxiosResponse<GoogleBooksResponse>> => {
  return await axios.get(
    `https://expressjs-postgres-production-5ff7.up.railway.app/google/title:${title}`
  )
}