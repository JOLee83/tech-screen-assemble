import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    alert: false
  }
  popUp = () => {
    this.setState(prevState => ({
      alert: !prevState.alert
    }))
  }
  render() {
    return (
      <>
        <div className={this.state.alert ? "alert" : "hide" }>
          <div className="alert-box">
          <h4>Sorry, ALl Results Are Displayed.</h4>
            <button onClick={this.popUp}>OK</button>
          </div>
        </div>
        <header>
          <h1>Assemble Books</h1>
        </header>
        <main>
          <h4 className="sec-title">Books</h4>
          <h3>Titles A-M</h3>
          <div className="results">{this.props.books.map((book, index) =>{
            if(index < 5){
              return (
                <section key={index}>
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
            <button onClick={this.popUp}>Show More</button>
          </div>
          <h3>Titles N-Z</h3>
          <div className="results">{this.props.books.map((book, index) =>{
            if(index >= 5){
              return (
                <section key={index}>
                  <Link to={`/${book.id}`}>
                    <div className="img-div">
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                    </div>        
                    <h4 className="book-title">{book.volumeInfo.title}</h4>
                    <h4 className="author">By {book.volumeInfo.authors[0]}</h4>
                  </Link>
                </section>
              )
            }
          })}</div>
          <div className="button-div">
            <button onClick={this.popUp}>Show More</button>
          </div>
        </main>
        <footer>
          <h2>Assemble Books</h2>
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

export default Home;
