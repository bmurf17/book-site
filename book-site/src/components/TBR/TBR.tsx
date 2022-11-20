import React from "react";
import { BookCard } from "../../shared/BookCard";
import { tempBook } from "../../types/book";

function TBR() {
  return <BookCard book={tempBook} showRating={false} />;
}

export default TBR;
