import { useState } from "react";
import { RankingStars } from "./RankingStars";
import { AddBookDto, Book } from "../types/Book";
import { addBookData } from "../api/BookApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faChevronLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function AddBook() {
  const [img, setImage] = useState(
    "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
  );
  const [author, setAuthor] = useState(1);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [dateRead, setDateRead] = useState("");
  const [rating, setRaing] = useState(4);

  const submit = () => {
    const book: AddBookDto = {
      img: img,
      title: title,
      author: author,
      pagecount: pageCount,
      genre: genre,
      user: 1,
      dateRead: undefined,
      rating: rating,
    };

    addBookData(book);
  };

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
        <img className="object-cover h-96" src={img} alt={"Add Book Photo"} />
      </div>
      <div className="text-xl pt-4 h-2/3 col-span-2 px-2">
        <div className="flex pt-4 items-center">
          <p className="pr-4">Author: </p>
          <div>
            <input
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setAuthor(+e.target.value)}
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Title: </p>
          <div>
            <input
              type="text"
              id="Title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="pr-4">Genre: </p>
          <div>
            <input
              type="text"
              id="genre"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setGenre(e.target.value)}
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
              required
              onChange={(e) => setPageCount(+e.target.value)}
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
        <div className="flex py-4 items-center">
          <button
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
            onClick={submit}
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}
