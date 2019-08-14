import React from "react";

class Book extends React.Component {

  render() {
    return (
      <div onClick={() => this.props.clickHandler(this.props.book)}>
        <h2>{this.props.book.title}</h2>
        <p>{this.props.book.img}</p>
      </div>
    );
  }
};

export default Book;
