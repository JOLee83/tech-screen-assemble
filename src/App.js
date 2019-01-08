import React, { Component } from 'react';
import Data from './FED_Books';
import Home from './Home.jsx'
import Book from './Book.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    books: Data.items.sort((a,b) => {return a.volumeInfo.title < b.volumeInfo.title ? -1 :a.volumeInfo.title > b.volumeInfo.title ? 1 : 0})
  }
  render() {
    return (
      <Router>
      <>
        <header>
          <h1>Assemble Books</h1>
        </header>
        <Switch>
        <Route exact path="/" render={() => {return <Home books={this.state.books}/>}}/>
        <Route path="/:id" component={Book}/>
        </Switch>
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
      </Router>
    );
  }
}

export default App;
