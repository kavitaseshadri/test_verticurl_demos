import React, { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'

const BookList = () => {

    const { books } = useContext(BooksContext);

    const renderedBook = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} />
        )
    })
    return (
        <div>{renderedBook}</div>
    )
}

export default BookList

