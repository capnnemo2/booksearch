import React from 'react';
import Book from '../Book/Book';

export default class ResultList extends React.Component {
    render() {
        console.log(this.props.books)

        const books = this
            .props
            .books
            .map((book, i) => <Book {...book} key={i} {...this.props} />)

        return (
            <div className='BooksearchApp'>
                {books}
            </div>
        )
    }
}

ResultList.defaultProps = {
    books: []
};