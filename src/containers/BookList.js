import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  // state={
    
  // }

  render() {
    const booksArray=this.props.allBooks.map(book=>(
      <Book
      key={book.id}
      book={book}
      toggleShelf={this.props.toggleShelf}
      />
    ))
    console.log('bookarray',booksArray);
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form submitForm={this.props.submitForm}/>
        <ul>{booksArray}</ul>
      </div>
    );
  }
}

export default BookList;
