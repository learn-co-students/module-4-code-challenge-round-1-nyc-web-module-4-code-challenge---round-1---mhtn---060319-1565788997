import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
    bookshelf: []
  }

  addToBookListHandler = (event, bookObj) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj)
    }
    fetch("http://localhost:3005/books", options).then(
      resp => resp.json()
    ).then(
      book => this.setState({
        bookList: [...this.state.bookList, book]
      })
    )
    this.setState({
      bookList: [...this.state.bookList, bookObj]
    })
  }

  addToBookshelfHandler = (bookObj) => {
    if (!this.state.bookshelf.includes(bookObj)) {
      this.setState({
        bookshelf: [...this.state.bookshelf, bookObj]
      })
    }
  }

  removeFromBookshelfHandler = (bookObj) => {
    if (this.state.bookshelf.includes(bookObj)) {
      const newBookshelf = this.state.bookshelf.filter(
        book => book.id !== bookObj.id
      )
      this.setState({
        bookshelf: newBookshelf
      })
    }
  }

  componentDidMount() {
    fetch("http://localhost:3005/books").then(
      resp => resp.json()
    ).then(books => {
      this.setState({
        bookList: books
      })
    }
    )
  }

  render() {
    return (
      <div className="book-container">
        <BookList addToBookListHandler={this.addToBookListHandler} addToBookshelfHandler={this.addToBookshelfHandler} books={this.state.bookList} />
        <Bookshelf removeFromBookshelfHandler={this.removeFromBookshelfHandler} books={this.state.bookshelf} />
      </div>
    );
  }
}

export default App;
