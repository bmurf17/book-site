import React from 'react';
import { BookCard } from '../../shared/BookCard';
import { tempBook } from '../../types/book';

function MyBooks() {
    return(
        <BookCard book={tempBook} showRating={true} />
    )
}

export default MyBooks;