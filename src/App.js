import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const BOOKS_URL = 'http://localhost:3005/books';

class App extends Component {

  state = {
    books: [],
  }

  fetchBooks = () => {
    return fetch(BOOKS_URL).then(res => res.json());
  }

  componentDidMount() {
    this.fetchBooks().then(books => {
      const processed = books.map(book => {
        const newBook = book;
        newBook.shelf = false;
        return newBook;
      })
      this.setState({books: processed});
      console.log(this.state.books);
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books.filter(book => {return book.shelf === false})}/>
        <Bookshelf books={this.state.books.filter(book => {return book.shelf === true})}/>
      </div>
    );
  }
}

export default App;
