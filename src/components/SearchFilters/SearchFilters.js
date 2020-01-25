import React from 'react';

export default class SearchFilters extends React.Component {
    render() {
        return (
            <div className='SearchFilters'>
                <label htmlFor='print-type'>Print Type:</label>
                <select name='print-type'>
                    <option value='All'>All</option>
                    <option value='Book'>Book</option>
                    <option value='Not-a-book'>Not a book</option>
                </select>

                <label htmlFor='book-type'>Book Type:</label>
                <select name='book-type'>
                    <option value='No-filter'>No filter</option>
                    <option value='eBook'>eBook</option>
                </select>
            </div>
        )
    }
}