import React from 'react';

export default class SearchFilters extends React.Component {
    render() {
        return (
            <div className='SearchFilters'>
                <label htmlFor='print-type'>Print Type:</label>
                <select name='print-type'>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>

                <label htmlFor='book-type'>Book Type:</label>
                <select name='book-type'>
                    <option value='No-filter'>No filter</option>
                    <option value='Partial'>Partial</option>
                    <option value='Full'>Full</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>eBooks</option>
                </select>
            </div>
        )
    }
}