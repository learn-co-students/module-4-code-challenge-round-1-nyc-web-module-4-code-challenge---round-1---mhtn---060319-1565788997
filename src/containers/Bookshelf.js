import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const bookshelfArray = props.bookshelf.map(book=>(
    <Book
    key={book.id}
    book={book}
    toggleShelf={props.toggleShelf}
    />
  ))
  console.log('bsp',props.bookshelf);
  
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookshelfArray}</ul>
    </div>
  );
};

export default Bookshelf;
