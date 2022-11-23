import React from "react";
import { BookCard } from "../../shared/BookCard";
import { tempBook } from "../../types/Book";

function MyBooks() {
  return (
    <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-4">
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={true} />
      </div>
    </div>
  );
}

export default MyBooks;
