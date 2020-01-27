import React from 'react';
import Booksearch from './components/Booksearch/Booksearch';
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

  // handleSubmit() {
  //   const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  //   const options = {
  //     method: 'GET'
  //   };
  //   const isPrintType = this.state.printType;
  //   const isBookType = this.state.bookType;
  //   const queryString = baseUrl + this.state.query + '&' + isPrintType + '&' + isBookType;
  //   console.log(queryString);
  // };

  getQuery = (newQuery) => {
    this.setState({
      query: newQuery
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


  
    



  render() {
    return (
      <div className='App'>
        <h1>Google Book Search</h1>
        <Booksearch 
          getQuery={newQuery => this.getQuery(newQuery)}
          getPrintType={this.getPrintType}
          getBookType={this.getBookType} />
      </div>
    )
  }
}
