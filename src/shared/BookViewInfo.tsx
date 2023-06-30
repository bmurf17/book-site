import { useState } from "react";
import { RankingStars } from "./RankingStars";
import { addBookData, getInfoFromGoogle } from "../api/BookApi";
import { AddBookDto } from "../types/Book";
import { GoogleBooksResponse, VolumeInfo } from "../types/GoogleBooksResponse";

interface Props {
  img: string;
  title: string;
  author: string;
  pageCount: number;
  genre: string;
  dateRead?: Date;
  rating: number;
  submit: (book: AddBookDto) => void;
  submitButtonText: string;
}

export function BookViewInfo({
  img: propImg,
  title: propTitle,
  author: propAuthor,
  pageCount: propPageCount,
  genre: propGenre,
  dateRead: propDateRead,
  rating: propRating,
  submit,
  submitButtonText,
}: Props) {
  const [img, setImage] = useState(
    propImg ||
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
  );
  const [author, setAuthor] = useState(propAuthor);
  const [title, setTitle] = useState(propTitle);
  const [genre, setGenre] = useState(propGenre);
  const [pageCount, setPageCount] = useState(propPageCount);
  const [dateRead, setDateRead] = useState(propDateRead);
  const [rating, setRating] = useState(propRating);

  const [fillOptions, setFillOptions] = useState<GoogleBooksResponse>();
  const [showFillOptions, setShowFillOptions] = useState(false);

  const getFillInfo = async () => {
    var temp = await getInfoFromGoogle(title);
    setFillOptions(temp.data);
    setShowFillOptions(true);
  };

  const fillInfo = (volumeInfo: VolumeInfo) => {
    setTitle(volumeInfo.title);
    setGenre(volumeInfo.categories[0]);
    setImage(
      volumeInfo.imageLinks?.thumbnail ||
        "https://books.google.com/books/publisher/content?id=PTBQEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0r9WQezTJW-cG6m5DjeBGcK5cuRA&w=1280"
    );
    setPageCount(volumeInfo.pageCount);
    setAuthor(volumeInfo.authors[0]);
  };

  return (
    <>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-2">
        <div className="flex justify-center py-4 col-span-1">
          <img className="object-cover h-96" src={img} alt={"Add Book Photo"} />
        </div>
        <div className="text-xl pt-4 h-2/3 col-span-2 px-2">
          <div className="grid md:grid-cols-6 grid-cols-4 md:gap-4 gap-8 p-4 mx-">
            <div className="flex justify-start items-center">Author: </div>
            <div className="col-span-5">
              <div className="flex justify-start items-center md:w-2/5 w-7/12">
                <input
                  type="text"
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-start items-center">Title: </div>
            <div className="col-span-5">
              <div className="flex justify-start items-center md:w-2/5 w-7/12">
                <input
                  type="text"
                  id="Title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-start items-center">Genre: </div>
            <div className="col-span-5">
              <div className="flex justify-start items-center md:w-2/5 w-7/12">
                <input
                  type="text"
                  id="genre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-start items-center">Page Count: </div>
            <div className="col-span-5">
              <div className="flex justify-start items-center md:w-2/5 w-7/12">
                <input
                  type="text"
                  id="pageCount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={pageCount}
                  onChange={(e) => setPageCount(+e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-start items-center">Date Read: </div>
            <div className="col-span-5">
              <div className="flex justify-start items-center md:w-2/5 w-7/12">
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
                    type="date"
                    name="start"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">Rating: </div>
            <div className="col-span-5 flex justify-start items-center md:w-2/5 w-7/12">
              <RankingStars />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <button
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                submit({
                  author: author,
                  img: img,
                  title: title,
                  pageCount: pageCount,
                  genre: genre,
                  user: 1,
                  rating: rating,
                });
              }}
            >
              {submitButtonText}
            </button>
            <button
              className=" hover:bg-green-800 text-green-600 border-2 border-green-600 font-bold py-2 px-4 rounded"
              onClick={getFillInfo}
            >
              Fill Info
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {showFillOptions ? (
          <>
            <div className="rounded overflow-hidden gap-2 mt-4 p-1">
              <div>
                <div className="text-xl">Fill In Options</div>
              </div>
            </div>
            <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-5 xl:grid-cols-5 gap-8">
              {fillOptions?.items?.slice(0, 5).map((volume: any) => {
                return (
                  <div
                    key={volume.volumeInfo.title + volume.volumeInfo.pageCount}
                    className="flex flex-col justify-center shadow-lg bg-white p-2 h-full "
                  >
                    <div className="flex justify-center h-full">
                      <img
                        src={
                          volume.volumeInfo.imageLinks?.thumbnail ||
                          "https://books.google.com/books/publisher/content?id=PTBQEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0r9WQezTJW-cG6m5DjeBGcK5cuRA&w=1280"
                        }
                        alt={volume.volumeInfo.title + " cover"}
                      />
                    </div>
                    <div className="text-center">{volume.volumeInfo.title}</div>
                    <button
                      className=" hover:bg-green-800 text-green-600 border-2 border-green-600 font-bold py-2 px-4 mx-2 rounded"
                      onClick={() => {
                        fillInfo(volume.volumeInfo);
                      }}
                    >
                      Use
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
