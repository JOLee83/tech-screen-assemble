import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <main>
          <h4 className="sec-title">Books</h4>
          <h3>Titles A-M</h3>
          <div className="results">{this.props.books.map((book, index) =>{
            if(index < 5){
      return (
      <section>
        <Link to={`/${book.id}`}>
        <div className="img-div">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>        <h4 className="book-title">{book.volumeInfo.title}</h4>
        <h4 className="author">By {book.volumeInfo.authors[0]}</h4>
        </Link>
      </section>
            
      )
    }
  })}</div>
          {/* <section>
            <img scr="" alt="" />
            <h4 className="book-title">Title</h4>
            <h4 className="author">By Author</h4>
          </section> */}
           <div className="button-div">
          <button>Show More</button>
          </div>
          <h3>Titles N-Z</h3>
          <div className="results">{this.props.books.map((book, index) =>{
            if(index >= 5){
      return (
      <section>
           <Link to={`/${book.id}`}>
        <div className="img-div">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>        <h4 className="book-title">{book.volumeInfo.title}</h4>
        <h4 className="author">By {book.volumeInfo.authors[0]}</h4>
        </Link>
      </section>
            
      )
    }
  })}</div>
          <div className="button-div">
          <button>Show More</button>
          </div>
        </main>
    )
  }
}

export default Home;
