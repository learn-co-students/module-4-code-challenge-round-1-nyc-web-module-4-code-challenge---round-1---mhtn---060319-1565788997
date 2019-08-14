import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const BOOKS_URL = 'http://localhost:3005/books';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
  state = {
    books: [],
  }

  fetchBooks = () => {
    return fetch(BOOKS_URL).then(res => res.json());
  }

  // foundFromStringOrDie = (event) => {

  // }

  flipShelf = (event, onShelf) => {
    const id = parseInt(event.target.dataset.id, 10);
    const book = this.state.books.findIndex(book => {
      return book.id === id;
    })
    console.assert(book !== -1);
    if (book !== -1) {
      console.assert(this.state.books[book].shelf === !onShelf);
      const newBooks = [...this.state.books];
      newBooks[book].shelf = onShelf;
      this.setState({books: newBooks});
    }
  }

  moveToShelf = (event) => {
    this.flipShelf(event, true)
  }

  moveToList = (event) => {
    this.flipShelf(event, false);
  }
  bookFromFormState = (state) => {
    const newBook = {
      id: getRandomInt(2147483647-10), //INT32_MAX
      title: state.title,
      author: state.author,
      img: state.img,
      shelf: false
    }
    return newBook;
  }

  isDuplicate = (newBooks, newBook) => {
    return newBooks.findIndex(book => {
      return ((book.title === newBook.title) &&
              (book.author === newBook.author) &&
              (book.img === newBook.img))
    });
  }

  newBook = (event, state) => {
    event.preventDefault();
 
    let newBooks = this.state.books;
    const newBook = this.bookFromFormState(state);
    const duplicate = this.isDuplicate(newBooks, newBook);

    if (duplicate === -1) {
      newBooks = [newBook, ...newBooks];
      this.setState({
        books: newBooks
      })
    }
    else {
      alert("already exists");
    }
  }

  addShelfComponent = (books) => {
    return books.map(book => {
      const newBook = book;
      newBook.shelf = false;
      return newBook;
    })
  }

  componentDidMount() {
    this.fetchBooks().then(books => {
      const processed = this.addShelfComponent(books);
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
        <BookList books={this.getList()} moveToShelf={this.moveToShelf} newBook={this.newBook.bind(this)}/>
        <Bookshelf books={this.getShelf()} moveToList={this.moveToList}/>
      </div>
    );
  }
}

export default App;
