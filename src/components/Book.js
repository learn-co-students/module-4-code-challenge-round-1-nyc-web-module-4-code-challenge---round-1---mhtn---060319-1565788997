import React from "react";

const Book = props => {
    return (
      <div onClick={props.move} data-id={props.book.id}>
        <h2 data-id={props.book.id}>{props.book.title}</h2>
        <img src={props.book.img} alt={props.book.title} data-id={props.book.id}/>
      </div>
    );
};

export default Book;
