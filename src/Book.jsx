import React, { Component } from 'react';
import Data from './FED_Books';
import { Link } from "react-router-dom";

class Book extends Component {
  state = {
    books: Data.items.sort((a,b) => {return a.volumeInfo.title < b.volumeInfo.title ? -1 :a.volumeInfo.title > b.volumeInfo.title ? 1 : 0})
  }
  render() {
    return (
      <>
       <header>
          <Link to="/">
            <h1>Assemble Books</h1>
          </Link>
        </header>
      <main>
        {this.state.books.map((book, index) => {
            if(book.id === this.props.match.params.id){
              return (
                <section key={index} className="book-info">      
                  <div className="img-div">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                  </div>        
                  <h4 className="book-title">{book.volumeInfo.title}</h4>
                  <h4 className="author">By {book.volumeInfo.authors[0]}</h4>
                  <h4 className="author">{book.volumeInfo.publisher}</h4>
                  <h4 className="author">{new Date(book.volumeInfo.publishedDate).toLocaleDateString()}</h4>
                  <p>{book.volumeInfo.description}</p>
                </section>
              )
            }
          })}
      </main>
      <footer>
          <Link to="/">
            <h2>Assemble Books</h2>
          </Link>
          <div className="links">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
          <div className="links">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div >
          <div className="links">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>
        </footer>
      </>
    )
  }
}

export default Book;
