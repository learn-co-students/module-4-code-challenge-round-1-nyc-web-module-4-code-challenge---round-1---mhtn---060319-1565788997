import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const bookComps = props.books.map(
    book => <Book clickHandler={props.removeFromBookshelfHandler} key={book.id} book={book} />
  )
  return (
    <div className="book-list">
      <h1>Book Shelf</h1>
      <ul>{bookComps}</ul>
    </div>
  );
}


export default Bookshelf;
