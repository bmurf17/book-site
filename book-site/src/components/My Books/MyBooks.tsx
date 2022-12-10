import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchBookData } from "../../api/BookApi";
import { AddBookCard } from "../../shared/AddBookCard";
import { BookCard } from "../../shared/BookCard";

function MyBooks() {
  const queryResult = useQuery("book", fetchBookData);

  if (queryResult.isLoading) {
    console.log("Loading");
    return <p> loading</p>;
  }

  return (
    <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-4">
      <Link to="/addbook">
        <AddBookCard />
      </Link>
      {queryResult.data?.data.map((book) => {
        return (
          <Link key={book.id} to={`/mybooks/${book.id}`}>
            <div>
              <BookCard book={book} showRating={true} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MyBooks;
