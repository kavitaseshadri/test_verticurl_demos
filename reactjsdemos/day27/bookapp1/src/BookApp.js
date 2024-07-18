import React, { useState } from 'react'
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';

const booksArray = [{ id: "101", title: "Catch 22" }];

const BookApp = () => {
    //create a book array as a state variable
    //define CRUD operation functions to manipulate book array
    // const [books, setBooks] = useState(booksArray)
    const [books, setBooks] = useState([{ id: '101', title: 'Catch-22', price: 499 }])

    const createBook = (title) => {
        const updatedBooks = [...books,
        {
            id: Math.round(Math.random() * 9999),
            title: title,
        }
        ]
        setBooks(updatedBooks);
        //every time the setter of a state variable is called, the corresponding UI will get updated
        console.log(books);

    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== -id;
        })
        setBooks(updatedBooks);
        console.log(books);
    }
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            setBooks(updatedBooks);
            console.log(books);
        })
    }
    return (
        <div>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookById}></BookList>
            {/* props drilling, passing an attribute declared in the parent to the child */}
            <BookCreate onCreate={createBook}></BookCreate>
        </div>
    )
}
// The main data of the application and the methods to change the data is also present here
//so the only way the child components can get access to the data and the  functions declared in the parent component is through props drilling

export default BookApp