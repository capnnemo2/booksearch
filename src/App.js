import React from 'react';
import Search from './components/Search/Search';
import BooksearchApp from './components/BooksearchApp/BooksearchApp';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "all",
      bookType: "no-filter",
      query: "",
      results: [],
      error: null
    };
  }

  componentDidMount() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const options = {
      method: 'GET'
    };
    const isPrintType = this.state.printType;
    const isBookType = this.state.bookType;
    // const queryString = baseUrl + query + '&' + isPrintType + '&' + isBookType;
    // console.log(queryString);
  };

  getQuery = (query) => {
    console.log(query);
  }


  
    



  render() {
    return (
      <div className='App'>
        <h1>Google Book Search</h1>
        <Search getQuery={this.getQuery} />

        <BooksearchApp />

      </div>
    )
  }
}
