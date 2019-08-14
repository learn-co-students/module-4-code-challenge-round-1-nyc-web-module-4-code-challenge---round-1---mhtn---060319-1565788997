import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state ={
    allBooks: [],
    idCounter: 9,
    id: "", //Unused
    title: "",
    author: "", 
    img: "",
    fave: false,
    favorites: []
  } 


  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json() )
    .then( books => {
      // console.log("Books:", books)
      this.setState({allBooks: books})
    })
  }


  handleNewFormChange = (e) => {
    // console.log("e targ val: ", e.target.value)
    // console.log("e targ name: ", e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }


  handleNewFormSubmit = (e) => {
    e.preventDefault()
    let newBook={
      id: this.state.idCounter,
      title: this.state.title,
      author: this.state.author, 
      img: this.state.img,
      fave: false
    }

    let allBooksCopy = [...this.state.allBooks, newBook]
    this.setState({allBooks: allBooksCopy, idCounter: this.state.idCounter+=1})
    fetch(`http://localhost:3005/books`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify({
        id: newBook.id,
        title: newBook.title,
        author: newBook.author, 
        img: newBook.img,
        fave: false
      })
    }).then(res => res.json())
    .then(parsedRes => {
      console.log("Add Ok? GOOD", parsedRes)
    })

  }


  handleBookListClick = (e, bookData) =>{
        // Never use e, could remove it from being passed in  & received 

    // console.log("BOOKS LIST CLICK -- e.target is: ", e.target)
    // console.log("BOOKS LIST CLICK -- bookdata: ", bookData)
    let favoritesCopy = this.state.favorites
    favoritesCopy.push(bookData.id)
    let allBooksCopy = [...this.state.allBooks]
    let bookIndex = allBooksCopy.indexOf(bookData)
    // console.log("bk inddexL", bookIndex) OK
    allBooksCopy[bookIndex]["fave"] = true

    this.setState({favorites: favoritesCopy, allBooks: allBooksCopy})
  }

  handleBookShelfClick = (e, bookData) =>{
    // Never use e, could remove it from being passed in  & received 
    console.log("SHELF SHELF bookdata: ", bookData)
    let favoritesCopy = this.state.favorites
    let faveIndex = favoritesCopy.indexOf(bookData.id)
    favoritesCopy.splice(faveIndex, 1)
    // favoritesCopy.push(bookData.id)
    // this.setState({favorites: favoritesCopy})

    let allBooksCopy = [...this.state.allBooks]
    let bookIndex = allBooksCopy.indexOf(bookData)
    allBooksCopy[bookIndex]["fave"] = false
    this.setState({favorites: favoritesCopy, allBooks: allBooksCopy})
  }


  filterAllBooksForFaves = () => {
    let favesArray = []
    for (const bk of this.state.allBooks) {
      if (this.state.favorites.includes(bk.id)){
        favesArray.push(bk)
      }
    }
    console.log("favesArray : ", favesArray)
    return favesArray
  }

  // Not sure passing in two functions necessary... 
  // could add to Bookshelf  bookdata  some piece
  // of data (like inBookShelf: true) to tell whether the click is coming from 
  // shelf or not,  handleBookListClick already worked
  // so I added a second function handleBookShelfClick  and went with first
  // solution that came to mind. 
  // Also a little weird that the BOOK has fave : t/f, 
  // probably more about relation between user and book, 
  // so doesn't scale past one user but that's kind of an out of scope concern? 
  render() {
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} 
        handleNewFormChange={this.handleNewFormChange} 
        handleNewFormSubmit={this.handleNewFormSubmit} 
        handleBookShelfClick={this.handleBookShelfClick}
        handleBookListClick={this.handleBookListClick}
        title={this.state.title} 
        author={this.state.author}
        img={this.state.img}
        fave={ (this.state.fave ? true : false  )}
        
        />
        <Bookshelf favoriteBooks={this.filterAllBooksForFaves()}  
        handleBookShelfClick={this.handleBookShelfClick}
        handleBookListClick={this.handleBookListClick}
        />
      </div>
    );
  }
}

export default App;
