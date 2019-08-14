import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const bookComps = this.props.books.map(
      book => <Book key={book.id} clickHandler={this.props.addToBookshelfHandler} book={book} />
    )
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitHandler={this.props.addToBookListHandler} />
        <ul>{bookComps}</ul>
      </div>
    );
  }
}

export default BookList;
