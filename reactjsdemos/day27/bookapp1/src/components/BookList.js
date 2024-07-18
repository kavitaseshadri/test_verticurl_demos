import React, { useState } from 'react'
import BookShow from './BookShow'

const BookList = ({ books, onDelete, onEdit }) => {
    const renderedBooks = books.map((book) => {
        return (
            <BookShow
                onEdit={onEdit}
                onDelete={onDelete}
                key={books.id}
                book={book} />
        )
    })

    return (
        <div>
            {renderedBooks}
        </div>
    )
}

export default BookList