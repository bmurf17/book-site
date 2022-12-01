import React from "react";
import { useQuery } from "react-query";
import { fetchBookData } from "../../api/BookApi";
import { BookCard } from "../../shared/BookCard";
import { tempBook } from "../../types/Book";

function TBR() {
  const queryResult = useQuery("book", fetchBookData);
  return (
    <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-4">
      {queryResult.data?.data.map((book) => {
        return (
          <div>
            <BookCard book={book} showRating={false} />
          </div>
        );
      })}
    </div>
  );
}

export default TBR;
