import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

const booksArray = [{ id: "101", title: "Catch 22" }
];

const BookApp = () => {
    //create a book array as a state variable
    //defined CRUD operation functions to manipulate book array
    // const [books, setBooks] = useState(booksArray);
    const [books, setBooks] = useState([{ id: "101", title: "Catch 22", price: 199 }]);
    const createBook = (title) => {
        const updatedBooks = [...books,
        {
            id: Math.round(Math.random() * 9999),
            title: title,
        }
        ];
        setBooks(updatedBooks);
        console.log(books);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
        console.log(books);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        })
        setBooks(updatedBooks);
        console.log(books);
    }

    return (
        <div>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}></BookList>
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
    )
}

export default BookApp