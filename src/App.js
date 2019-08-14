import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    shelf: []
  }

  addToShelf = (book) => {
    if (this.state.shelf.indexOf(book) === -1) {
      this.setState({shelf: [...this.state.shelf, book]})
    }
  }

  removeFromShelf = (book) => {
    let copy = [...this.state.shelf]
    let index = copy.indexOf(book)
    copy.splice(index, 1)
    this.setState({shelf: copy})
  }

  render() {
    return (
      <div className="book-container">
        <BookList addToShelf={this.addToShelf}/>
        <Bookshelf books={this.state.shelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
