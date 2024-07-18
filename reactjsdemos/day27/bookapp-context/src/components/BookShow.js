import React, { useState, useContext } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'

const BookShow = ({ book }) => {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }
    const handleEditClick = () => {
        setShowEdit((prev) => !prev);
    }
    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}>
            Edit
        </BookEdit>
    }


    return (
        <div>
            <div>{content}</div>
            <div>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow