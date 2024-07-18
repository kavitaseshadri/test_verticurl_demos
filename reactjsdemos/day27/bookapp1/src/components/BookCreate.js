import React, { useState } from 'react'

const BookCreate = () => {

    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        console.log('handleSubmit called in BookCreate');
        event.preventDefault();
        //to prevent the form from being submitted to server side script
        onCreate(title);
        setTitle('');
    }

    return (
        <div>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} />
                <button type="submit">Create a Book</button>
            </form>
        </div>
    )
}

export default BookCreate