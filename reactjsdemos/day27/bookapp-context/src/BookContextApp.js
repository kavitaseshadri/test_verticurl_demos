import React from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

const BookContextApp = () => {
    return (
        <div>
            <BookList />
            <BookCreate />
        </div>
    )
}

export default BookContextApp