import React from 'react';
import './SearchFilters.css';

export default class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            printType: "all",
            bookType: "no-filter"
        }
    }

    printTypeChanged(printType) {
        this.setState({
            printType
        })
    }

    getPrintType

    bookTypeChanged(bookType) {
        this.setState({
            bookType
        })
    }

    render() {
        return (
            <div className='SearchFilters'>
                <label htmlFor='print-type'>Print Type:</label>
                <select name='print-type' onChange={e => this.props.printType(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>

                <label htmlFor='book-type'>Book Type:</label>
                <select name='book-type' onChange={e => this.props.bookType(e.target.value)}>
                    <option value='no-filter'>No filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>eBooks</option>
                </select>
            </div>
        )
    }
}