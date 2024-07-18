import React, { useState } from 'react'

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange}></input>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default BookEdit