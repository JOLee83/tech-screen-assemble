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
      
        <Switch>
        <Route exact path="/" render={() => {return <Home books={this.state.books}/>}}/>
        <Route path="/:id" component={Book}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
