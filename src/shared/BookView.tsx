import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Author } from "../types/Author";
import { Book } from "../types/Book";
import { RankingStars } from "./RankingStars";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
      return await axios.get<Author[]>(
        `https://expressjs-postgres-production-5ff7.up.railway.app/author/${
          book?.author || 1
        }`
      );
    }
  );

  return (
    <div className="rounded overflow-hidden shadow-lg bg-white grid md:grid-cols-3 grid-cols-1 gap-2">
      <Link
        className="flex col-span-3 py-4 px-4 text-green-600 hover:text-green-800 hover:cursor-pointer text-xl align-middle"
        to={"/mybooks"}
      >
        <FontAwesomeIcon className="pr-2  py-1" icon={faChevronLeft} />
        <p>Back</p>
      </Link>
      <div className="flex justify-center py-4 col-span-1">
        <img className="object-cover h-96" src={book?.img} alt={book?.title} />
      </div>
      <div className="text-xl pt-4 h-2/3 col-span-2 px-2">
        <div className="flex pt-4 items-center">
          <p className="pr-4">Author: </p>
          <div>
            <input
              type="text"
              id="pageCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={authorData?.data[0].name || ""}
              required
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Title: </p>
          <div>
            <input
              type="text"
              id="pageCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={book?.title || ""}
              required
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Genre: </p>
          <div>
            <input
              type="text"
              id="pageCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={book?.genre || ""}
              required
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Page Count: </p>
          <div>
            <input
              type="text"
              id="pageCount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={book?.pagecount?.toString() || ""}
              required
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Date Read: </p>
          <div className="flex items-center">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="start"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
              />
            </div>
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Rating: </p>
          <RankingStars />
        </div>
      </div>
    </div>
  );
}
