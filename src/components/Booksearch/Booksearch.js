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
            bookType: "no-filter",
            results: [],
            error: null
        };
    }

    queryChanged(query) {
        this.setState({
            query
        });
    }

    getPrintType = (newPrintType) => {
        this.setState({
          printType: newPrintType
        });
    }
    
    getBookType = (newBookType) => {
        this.setState({
            bookType: newBookType
        });
    }

    handleSubmit = (e) => {
        console.log(`ran handle submit`);
        e.preventDefault();
        const url = 'https://www.googleapis.com/books/v1/volumes?q=';
        const apiKey = 'AIzaSyCuC9CJwx6Z2YZkyn3xanmL4lroIAkvVB0';

        const queryUrl = url + this.state.query + '&printType=' + this.state.printType + '&filter=' + this.state.bookType +'&key=' + apiKey;

        const queryUrlNoFilter = url + this.state.query + '&printType=' + this.state.printType + '&key=' + apiKey;

        const realQueryUrl = this.state.bookType !== 'no-filter' ? queryUrl : queryUrlNoFilter;

        console.log(realQueryUrl);

        fetch(realQueryUrl)
            .then(res => {
                if(!res.ok) {
                    throw new Error('It didn\'t work, but we heard you can\'t read anyway.')
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: data.items,
                    error: null
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            })
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
                        printType={this.getPrintType}
                        bookType={this.getBookType} />
                </form>

                <ResultList
                    books={this.state.results} />

            </div>
        )
    }
}