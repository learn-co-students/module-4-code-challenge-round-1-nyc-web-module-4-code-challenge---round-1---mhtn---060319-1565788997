import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    favs: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(books => {
      this.setState({books: books})
    })
  }

  addToBookShelf = (favBook) => {
    if(!this.state.favs.includes(favBook)){
      let newFavBookArr = [favBook, ...this.state.favs]
      this.setState({favs: newFavBookArr})
    }
  }
  removeFromBookShelf = (removeThisBook) => {
    let newFavBookArr = this.state.favs.filter(book => book != removeThisBook)
    this.setState({favs: newFavBookArr})
  }

  addBook = (newBook) => {
    let newId = this.state.books[this.state.books.length - 1].id + 1;
    newBook.id = newId;
    let newBooks = [newBook, ...this.state.books]
    this.setState({books: newBooks})
  }
  render() {
    return (
      <div className="book-container">
        <BookList allBooks = {this.state.books} addFav = {this.addToBookShelf} addBook = {this.addBook}/>
        <Bookshelf favs = {this.state.favs} removeMethod = {this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
