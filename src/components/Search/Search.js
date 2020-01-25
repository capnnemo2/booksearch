import React from 'react';
import SearchFilters from '../SearchFilters/SearchFilters';

export default class Search extends React.Component {
    render() {
        return (
            <div className='Search'>
                <form className='Search__form'>
                    <label htmlFor='search'>Search:</label>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='potato'
                        value='' />
                    <button type='submit'>Search</button>
                    <SearchFilters />
                </form>

            </div>
        )
    }
}