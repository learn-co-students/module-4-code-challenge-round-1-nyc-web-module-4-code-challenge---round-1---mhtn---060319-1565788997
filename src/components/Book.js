import React from "react";

const Book = props => {
  console.log('props',props.book);
  
  return (
    <div onClick={()=>props.toggleShelf(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}></img>
      
    </div>
  );
};

export default Book;
