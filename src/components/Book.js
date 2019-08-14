import React from "react";

const Book = props => {
  // console.log("Book props:", props)

  return (
    
    <div onClick={ (props.bookData.fave ? 
      ((e)=>props.handleBookShelfClick(e, props.bookData)) : ((e)=>props.handleBookListClick(e, props.bookData))
      ) } >

      <li >
      <h2>{props.bookData.title}</h2>
      {/*book img*/}
      <img src={props.bookData.img} alt="image broken" />
      <div name="id" style={{display: "none"}}>{props.bookData.id}</div>
      {/* Never used this ^  */}
    </li>
    </div>
  );
};

export default Book;
