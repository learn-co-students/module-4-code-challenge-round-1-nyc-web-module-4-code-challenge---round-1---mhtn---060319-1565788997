import React from "react";

const Book = props => {

  const { book } = props
  return (

    < div onClick={_ => props.clickHandler(book)} >
      <h2>{book.title}</h2>
      <img src={book.img} alt="react stop yelling at me" />
    </div >
  );
};

export default Book;
