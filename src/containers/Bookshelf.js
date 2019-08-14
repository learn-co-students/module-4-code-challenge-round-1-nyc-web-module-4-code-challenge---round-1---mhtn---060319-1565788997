import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let removeFromBookShelf = (removeThisBook) => {
    props.removeMethod(removeThisBook)
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.favs.map(book => <Book data = {book} key={book.id} removeFunc = {removeFromBookShelf}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
