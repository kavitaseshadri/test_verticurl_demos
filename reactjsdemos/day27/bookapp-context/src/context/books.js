import { useState, createContext } from 'react'

const BooksContext = createContext();
//at least two main properties Provider, Consumer
//create a new Context object using the createContext() hook
//we will be moving our books array state variable here
//we will be moving all the CRUD operations/functions related to the book here

//We are going to create a component, but its not a UI component

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title,
            }
        ]
        setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        });
        setBooks(updatedBooks);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    //declare a new object to be shared by this particular context
    const valueToShare = {
        books,
        createBook,
        deleteBookById,
        editBookById
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )

}
export { Provider };//named export
export default BooksContext;