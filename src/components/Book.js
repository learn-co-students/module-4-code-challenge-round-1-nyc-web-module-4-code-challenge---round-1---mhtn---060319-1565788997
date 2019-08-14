import React from "react";

const Book = props => {
  let clickHandler = (event) => {
    if(props.favMethod){
      props.favMethod(props.data)
    }else{
      props.removeFunc(props.data)
    }
  }

  return (
    <div onClick = {clickHandler}>
      <h2>{props.data.title}</h2>
      <img alt = "" src = {props.data.img} />
    </div>
  );
};

export default Book;
