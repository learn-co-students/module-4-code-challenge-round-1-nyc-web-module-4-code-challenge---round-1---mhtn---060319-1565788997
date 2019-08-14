import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {

    console.log("props booklist: ", this.props  ) 

    let bookObjs = this.props.allBooks.map( b =>{
      return <Book bookData={b} 
      handleBookListClick={this.props.handleBookListClick} 
      handleBookShelfClick={this.props.handleBookShelfClick} 
      />
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewFormChange={this.props.handleNewFormChange}   handleNewFormSubmit={this.props.handleNewFormSubmit}/>
        <ul>{bookObjs}</ul>
      </div>
    );
  }
}

export default BookList;
