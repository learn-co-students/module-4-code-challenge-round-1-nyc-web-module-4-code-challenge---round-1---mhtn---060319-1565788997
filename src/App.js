import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends React.Component {

  state = {
    bookListArray: [],
    bookShelfArray: [],
    title: '',
    author: '',
    img: ''
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    // .then(console.log)
    .then(bookListArray => {
      this.setState({bookListArray})
    })
  }

// ran out of time so commented out these 2 functions to enable Form

  // handleAddForm(e){
  //    e.preventDefault()
  //    this.setState({
  //      [e.target.name]: e.target.value
  //    })
  // }
  //
  // handleSubmit(e){
  //    const title: this.state.title
  //    const author: this.state.author
  //    const img: this.state.img
  //    const newBook = {title: title, author: author. img: img}
  //    this.setState({
  //      bookListArray: {...this.state.bookListArray, newBook}
  //     })
  // }

//add book to BookShelf and remove from bookList
  addBookToShelf = (book) => {
    console.log("clicked")

    let unclickedBooks = this.state.bookListArray.filter(bookObj => bookObj.id !== book.id)

    this.setState({
      bookListArray: unclickedBooks,
      bookShelfArray: [...this.state.bookShelfArray, book]
    })
  }

//remove book from BookShelf and add back to bookList
  removeBookFromShelf = (book) => {
    const newShelfArray = this.state.bookShelfArray.filter(bookObj => bookObj.id !== book.id)
    this.setState({
      bookListArray: [...this.state.bookListArray, book],
      bookShelfArray: newShelfArray
    })
  }

  render() {
    console.log(this.state.bookListArray)
    return (
      <div className="book-container">
        <BookList
          books={this.state.bookListArray}
          clickHandler={this.addBookToShelf}
          handleAddForm={this.handleAddForm}
          />
        <Bookshelf
          books={this.state.bookShelfArray}
          clickHandler={this.removeBookFromShelf}
          />
      </div>
    );
  }
}

export default App;
