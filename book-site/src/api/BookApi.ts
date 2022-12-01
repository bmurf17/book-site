import axios from "axios";
import { Book } from "../types/Book";

export const fetchBookData = async () => {
  return await axios.get<Book[]>(
    "https://expressjs-postgres-production-5ff7.up.railway.app/book"
  );
};
