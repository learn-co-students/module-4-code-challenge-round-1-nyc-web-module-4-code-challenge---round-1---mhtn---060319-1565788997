import React, { Component } from "react";
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

  moveToShelf = (event) => {
    const id = parseInt(event.target.dataset.id, 10);
    const book = this.state.books.findIndex(book => {
      return book.id === id;
    })
    if (book !== -1) {
      // const oldBook = Object.assign({}, this.state.books[book]);
      // const newBooks = this.state.books.splice(book, 1);
      console.assert(this.state.books[book].shelf === false);
      const newBooks = [...this.state.books];
      newBooks[book].shelf = true;
      this.setState({books: newBooks});
    }
  }

  moveToList = (event) => {
    const id = parseInt(event.target.dataset.id, 10);
    const book = this.state.books.findIndex(book => {
      return book.id === id;
    })
    if (book !== -1) {
      // const oldBook = Object.assign({}, this.state.books[book]);
      // const newBooks = this.state.books.splice(book, 1);
      console.assert(this.state.books[book].shelf === true);
      const newBooks = [...this.state.books];
      newBooks[book].shelf = false;
      this.setState({books: newBooks});
    }
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

  getList = () => {
    return this.state.books.filter(book => {return book.shelf === false});
  }

  getShelf = () => {
    return this.state.books.filter(book => {return book.shelf === true})
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.getList()} moveToShelf={this.moveToShelf}/>
        <Bookshelf books={this.getShelf()} moveToList={this.moveToList}/>
      </div>
    );
  }
}

export default App;
