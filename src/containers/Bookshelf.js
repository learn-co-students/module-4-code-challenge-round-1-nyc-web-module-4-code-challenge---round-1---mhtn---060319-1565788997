import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBooks(books){
    return books.map(book => {
      return <Book key={book.id} book={book} move={props.moveToList}/>
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks(props.books)}</ul>
    </div>
  );
};

export default Bookshelf;
