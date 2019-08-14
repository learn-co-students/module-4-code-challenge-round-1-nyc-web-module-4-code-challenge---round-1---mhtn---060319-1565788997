import React from "react";

const Book = props => {
  return (
    <div name='book' onClick={() => props.updateBookshelf(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt='book cover'/>
    </div>
  );
};

export default Book;
