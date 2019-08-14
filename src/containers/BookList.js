import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let allBooks = this.props.books.map(book => <Book key={book.id} book={book} updateBookshelf={this.props.updateBookshelf}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
