import React from 'react';
import './Book.css'

export default class Book extends React.Component {
    render() {
        return (
            <div className='Book'>
                <h2>Title</h2>
                <p>This is a gripping description of one of the most unique books of all time.</p>
                <img src='http://res.freestockphotos.biz/pictures/14/14301-illustration-of-a-book-pv.png' />
            </div>
        )
    }
}