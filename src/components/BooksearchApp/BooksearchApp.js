import React from 'react';
import Book from '../Book/Book';

export default class BooksearchApp extends React.Component {
    render() {
        return (
            <div className='BooksearchApp'>
                <Book />
                <Book />
            </div>
        )
    }
}