import React from 'react';
import './Book.css'

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        };
    }

    setShowDetail(show) {
        this.setState({
            showDetail: show
        });
    }


    render() {
       
        const basic =   <div className='Book__basic_info'>
                            <h2>{this.props.volumeInfo.title}</h2>
                            <h3>{this.props.volumeInfo.authors}</h3>
                            <img src={this.props.volumeInfo.imageLinks.smallThumbnail} alt='thumbnail of the book'/>
                            <button type='button' onClick={e => this.setShowDetail(true)}>More details</button>
                        </div>

        const detail =  <div className='Book__details'>
                            <h2>{this.props.volumeInfo.title}</h2>
                            <h3>{this.props.volumeInfo.authors}</h3>
                            <img src={this.props.volumeInfo.imageLinks.thumbnail} alt='the book' />
                            <p>{this.props.volumeInfo.description}</p>
                            <button type='button' onClick={e => this.setShowDetail(false)}>Less details</button>
                        </div>

        const page = this.state.showDetail ? detail : basic;

        return (

            <div className='Book'>
                {page}
            </div>
        )
    }
    

    
}



    // Upon clicking the book (the whole li in a ul? inline-block? or just clicking the title? or clicking the book's image?) a conditional statement will display further details about the book: price?, partial vs full?, ??
    // Clicking the book again will hide the extra info
    // I think to do this I need to set state in this component, probably use a conditional statement to render the book details with an onClick event listener.