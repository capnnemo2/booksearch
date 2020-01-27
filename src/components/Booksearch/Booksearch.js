import React from 'react';
import SearchFilters from '../SearchFilters/SearchFilters';
import './Booksearch.css';
import ResultList from '../ResultList/ResultList';

export default class Booksearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            printType: "all",
            bookType: "no-filter"
        };
    }

    handleSubmit = (e) => {
        console.log(`ran handle submit`);
        e.preventDefault();
        const newQuery = this.state.query;
        this.props.getQuery(newQuery);
    }

    queryChanged(query) {
        this.setState({
            query
        });
    }


    render() {
        return (
            <div className='Search'>
                <form className='Search__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='search'>Search:</label>
                    <input
                        type='text'
                        name='query'
                        id='query'
                        placeholder='potato'
                        onChange={e => this.queryChanged(e.target.value)} />
                    <button type='submit'>Search</button>
                    <SearchFilters
                        printType={this.props.getPrintType}
                        bookType={this.props.getBookType} />
                </form>

                <ResultList />

            </div>
        )
    }
}