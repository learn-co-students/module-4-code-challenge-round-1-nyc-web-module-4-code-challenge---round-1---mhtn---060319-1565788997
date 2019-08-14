import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let allBooks = props.books.map(book => <Book key={book.id} book={book} updateBookshelf={props.updateBookshelf}/>)

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{allBooks}</ul>
    </div>
  );
};

export default Bookshelf;
