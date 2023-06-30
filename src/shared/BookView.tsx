import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Author } from "../types/Author";
import { AddBookDto, Book } from "../types/Book";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BookViewInfo } from "./BookViewInfo";
import { updateBookData } from "../api/BookApi";

export function BookView() {
  const params = useParams();
  const bookId = params.id;
  var book: Book | undefined;

  const { isLoading: isBookLoading, data: bookData } = useQuery(
    `book-${bookId}`,
    async () => {
      return await axios.get<Book>(
        `https://expressjs-postgres-production-5ff7.up.railway.app/book/${bookId}`
      );
    }
  );
  if (!isBookLoading) {
    book = bookData?.data;
  }

  const { isLoading: isAuthorLoading, data: authorData } = useQuery(
    `author-${bookId}`,
    async () => {
      return await axios.get<Author>(
        `https://expressjs-postgres-production-5ff7.up.railway.app/author/${
          book?.author || 1
        }`
      );
    }
  );

  const submit = (book: AddBookDto) => {
    if (bookId) {
      updateBookData(book, bookId);
    }
  };

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white h-full">
      <Link
        className="flex col-span-3 py-4 px-4 text-green-600 hover:text-green-800 hover:cursor-pointer text-xl align-middle"
        to={"/mybooks"}
      >
        <FontAwesomeIcon className="pr-2  py-1" icon={faChevronLeft} />
        <p>Back</p>
      </Link>
      <BookViewInfo
        img={bookData?.data.img || ""}
        title={bookData?.data.title || ""}
        author={authorData?.data.name || ""}
        pageCount={bookData?.data.pagecount || 0}
        genre={bookData?.data.genre || ""}
        dateRead={bookData?.data.dateread}
        rating={bookData?.data.rating || 0}
        submit={submit}
        submitButtonText="Edit Book"
      />
    </div>
  );
}
