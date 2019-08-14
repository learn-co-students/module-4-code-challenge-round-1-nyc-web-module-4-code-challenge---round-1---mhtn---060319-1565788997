import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => {
      return <Book key={book.id} book={book} move={this.props.moveToShelf}/>
    })
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newBook={this.props.newBook}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
