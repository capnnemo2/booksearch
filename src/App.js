import React from 'react';
import Search from './components/Search/Search';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     books: [],
  //     showBooks: false
  //   };
  // }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
    const options = {
      method: 'GET'
    }
  }

  // fetch(url, options)
  //   .then(res => {
  //     if(!res.ok) {
  //       throw new Error('No such book, we heard you can\'t read anyway.')
  //     }
  //     return res;
  //   })
  //   .then(res => res.json())
  //   .catch(err => {
  //     this.ListeningStateChangedEvent({
  //       error: err.message
  //     });
  //   });



  render() {
    return (
      <div className='App'>
        <h1>Google Book Search</h1>
        <Search />

      </div>
    )
  }
}
