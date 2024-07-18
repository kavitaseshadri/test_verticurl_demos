import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookContextApp from './BookContextApp';
import { Provider } from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <BookContextApp></BookContextApp>
    </Provider>
    {/* <FacultyProvide>
      <FacultyApp />
    </FacultyProvide>

    <StudentProvide>
      <StudentApp />
    </StudentProvide> */}
  </React.StrictMode>
);


