import axios from "axios";
import { useQuery } from "react-query";
import { Author } from "../types/Author";
import { Book } from "../types/Book";
import { RankingStars } from "./RankingStars";

interface Props {
  book: Book;
  showRating: boolean;
}

export function BookCard({ book, showRating }: Props) {
  const { isLoading, data } = useQuery(`author-${book.id}`, async () => {
    return await axios.get<Author[]>(
      `https://expressjs-postgres-production-5ff7.up.railway.app/author/${book.author}`
    );
  });

  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer h-full flex flex-col justify-center ">
      <div className="flex justify-center pt-4">
        <img className="object-cover h-64" src={book.img} alt={book.title} />
      </div>
      <div className="flex justify-center text-center px-6 pt-4">
        <div className="font-bold text-xl">{book.title}</div>
      </div>
      <div className="flex justify-center text-center px-6">
        <p className="text-gray-700 text-lg">{data?.data[0].name}</p>
      </div>
      <div className="flex justify-center px-6 pb-2">
        {showRating ? (
          <RankingStars />
        ) : (
          <>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Finished
            </button>
          </>
        )}
      </div>
    </div>
  );
}
