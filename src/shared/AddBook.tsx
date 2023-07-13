import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { addBookData } from "../api/BookApi";
import { AddBookDto } from "../types/Book";
import { BookViewInfo } from "./BookViewInfo";
import toast, { Toaster } from "react-hot-toast";

const notify = (bookName: string, shelfName: string) =>
  toast.success(`Added ${bookName} to your ${shelfName}`);

export function AddBook() {
  const nav = useNavigate();
  const submit = (book: AddBookDto) => {
    addBookData(book);

    book.dateRead
      ? notify(book.title, "Read Books")
      : notify(book.title, "TBR");
    nav("/mybooks");
  };

  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg bg-white h-full">
        <Link
          className="flex col-span-3 py-4 px-4 text-green-600 hover:text-green-800 hover:cursor-pointer text-xl align-middle"
          to={"/mybooks"}
        >
          <FontAwesomeIcon className="pr-2  py-1" icon={faChevronLeft} />
          <p>Back</p>
        </Link>
        <BookViewInfo
          img={""}
          title={""}
          author={""}
          pageCount={0}
          genre={""}
          dateRead={undefined}
          rating={0}
          submit={submit}
          submitButtonText="Add Book"
        />
      </div>
    </div>
  );
}
