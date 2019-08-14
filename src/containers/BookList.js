import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form"


class BookList extends Component {



  render() {
    // console.log(this.props)
    const allBooks = () => {
      return this.props.books.map(book => {
        return (<Book
          key={book.id}
          book={book}
          clickHandler={this.props.clickHandler}
          />)
      })
    }
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          book={this.book}
          handleAddForm={this.handleAddForm}
          handleSubmit={this.handleSubmit}
          />
        <div>{allBooks()}</div>
      </div>

    );
  }
}

export default BookList;
