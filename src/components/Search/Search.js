import React from 'react';
import SearchFilters from '../SearchFilters/SearchFilters';
import './Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    // handleSubmit = (e) => {
    //     console.log(`ran handle submit`);
    //     e.preventDefault();
    //     this.setState({
    //         query: e.target.value
    //     });
    // }

    queryChanged(query) {
        this.setState({
            query
        })
    }

    render() {
        return (
            <div className='Search'>
                <form className='Search__form'>
                    <label htmlFor='search'>Search:</label>
                    <input
                        type='text'
                        name='query'
                        id='query'
                        placeholder='potato'
                        onChange={e => this.queryChanged(e.target.value)} />
                    <button type='submit'>Search</button>
                    <SearchFilters />
                </form>

            </div>
        )
    }
}