import React, { useState } from 'react'
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(current => !current);
    }
    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleSubmit = () => {
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit}></BookEdit>
    }

    return (
        <div>
            <div>{content}</div>
            <div>
                <button type="button" onClick={handleEditClick}>Edit</button>
                <button type="button" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow