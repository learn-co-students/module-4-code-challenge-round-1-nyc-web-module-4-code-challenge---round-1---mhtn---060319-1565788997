import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => {
      this.setState({books})
    })
  }

  addBookToList = (book) => {
    fetch('http://localhost:3005/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(book => {
      this.setState({books: [...this.state.books, book]})
    })

  }

  render() {
      const booksArray = this.state.books.map(book => {
        return <Book key={book.title} book={book} addToShelf={this.props.addToShelf}/>
      })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBookToList={this.addBookToList}/>
        <ul>{booksArray.length > 0 ? booksArray: [] }</ul>
      </div>
    );
  }
}

export default BookList;
