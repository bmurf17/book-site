import React from "react";
import { BookCard } from "../../shared/BookCard";
import { tempBook } from "../../types/Book";

function TBR() {
  return (
    <div className="grid md:grid-cols-6 grid-cols-2 gap-8">
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
      <div>
        <BookCard book={tempBook} showRating={false} />
      </div>
    </div>
  );
}

export default TBR;
