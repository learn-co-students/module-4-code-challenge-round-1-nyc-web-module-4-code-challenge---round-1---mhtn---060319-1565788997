import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  
  state = {data: {},
          bookshelfBooks : []}

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => this.setState({data: json}))
  }

  addToBookshelf = (newBook) => {
    this.setState({bookshelfBooks : [...bookshelfBooks, newBook]})
  } 

  //to bookklist
  addNewBook = (newBook) => {
    this.setState({data: [...data, newBook]})
  }
  

  
  render() {
    
    console.log("App state", this.state)
    
    return (
      <div className="book-container">
        <BookList books = {this.state} addToBookshelf={this.addToBookshelf} addNewBook={this.addNewBook}/>
        <Bookshelf books = {this.state}/>
      </div>
    );
  }
}

export default App;
