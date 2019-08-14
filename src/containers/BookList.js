import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

//it recevies the following props:
// books = {this.state} = [{}{}{}] arr of book objs



class BookList extends Component {

  

  

  render() {
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{
          // console.log("BookList props",this.props.books.data)
          // console.log("BookList props data keys length",Object.keys(this.props.books.data).length)
          Object.keys(this.props.books.data).length === 0 ? console.log("BookList: props.books.data has nothing") 
          : this.props.books.data.map(book => <li><div>
            <Book bookObj = {book} bookState = {this.state} addToBookshelf ={this.addToBookshelf} addNewBook={this.addNewBook}/>
            </div></li>)  
          // Object.keys(this.props.books.data).length === 0 ? console.log("data has nothing") : console.log("data has something")

        }</ul>
      </div>
    );
  }
}

export default BookList;
