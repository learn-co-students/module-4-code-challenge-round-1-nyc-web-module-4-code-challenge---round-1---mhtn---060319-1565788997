import React from "react";

class Book extends React.Component{

  render() {
    return (
      <div onClick={this.props.move} data-id={this.props.book.id}>
        <h2 data-id={this.props.book.id}>{this.props.book.title}</h2>
        <img src={this.props.book.img} alt={this.props.book.title} data-id={this.props.book.id}/>
      </div>
    );
  }
};

export default Book;
