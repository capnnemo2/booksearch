import React from 'react';
import Search from './components/Search/Search';

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Google Book Search</h1>
        <Search />

      </div>
    )
  }
}
