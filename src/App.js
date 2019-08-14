import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  
  state = {
    books: [],
    bookshelf: []
  }
  
  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(bookData => this.setState({books: bookData}))
  }

  updateBookshelf = book => {
    if (!this.state.bookshelf.includes(book)) {
      this.setState({bookshelf: [...this.state.bookshelf, book]})
    } else {
      this.setState({bookshelf: this.state.bookshelf.filter(bookObj => bookObj.id !== book.id)})
    }
  }

  // in configuring the POST request i added the same book twice which is why Trick Mirror is there 2x
  addBook = event => {
    let title = event.target.title.value
    let author = event.target.author.value
    let img = event.target.img.value
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        author: author,
        img: img
      })
    })
    .then(res => res.json())
    .then(bookData => this.setState({books: bookData}))
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} updateBookshelf={this.updateBookshelf} addBook={this.addBook}/>
        <Bookshelf books={this.state.bookshelf} updateBookshelf={this.updateBookshelf}/>
      </div>
    );
  }
}

export default App;
