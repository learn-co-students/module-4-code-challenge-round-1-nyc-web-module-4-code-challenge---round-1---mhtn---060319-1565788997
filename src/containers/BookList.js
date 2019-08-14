import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // {console.log(this.props.addBook)}
    return (
      
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook = {this.props.addBook}/>
        <ul>{(this.props.allBooks.length > 0)? this.props.allBooks.map(book => <Book data={book} key = {book.id} favMethod = {this.props.addFav}/>) : null}</ul>
      </div>
    );
  }
}

export default BookList;
