import React, {Component} from "react";
import Book from "../components/Book";

export default class BookShelf extends Component {
  render(){
    const booksArray = this.props.books.map(book => {
      return <Book key={book.title} book={book} addToShelf={this.props.removeFromShelf}/>
    })
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{booksArray}</ul>
      </div>
    );
  }
}
