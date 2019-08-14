import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

// progress: I know the form is not working and I have ideas as to why. The form is set up to take in information but the page keeps rerendering. I think this has something to do with the componentDidMount. I want to extract the information, put it into a variable, and then pass this variable into the child component. I am just trying to figure out how to do so but the rerendering is making it difficult to grab values so console log when I submit the form. I just need a bit more time to play with this.

class App extends Component {
  state={
    allBooks:[],
    bookshelf:[]
  }

  componentDidMount(){
    console.log("l")
    fetch('http://localhost:3005/books')
    .then(res=>res.json())
    .then(data=>this.setState({allBooks:data}))
  }
  // getBooks=()=>{
  //   let allTheBooks = this.state.allBooks
  // }

  toggleShelf=(book)=>{
    if(!this.state.bookshelf.includes(book)){
      this.setState({bookshelf:[...this.state.bookshelf, book]})
    }else{
      this.setState({bookshelf:this.state.bookshelf.filter(book=>(book.title!==book.title))})
    }

    // console.log('book', book);
  }

  submitForm=(event, book)=>{
    event.preventdefault()
    // const allTheBooks = [...this.state.allBooks, book]
    this.setState({allBooks:[...this.state.allBooks, book]})
    console.log('b', book)
  }

  render() {
    // const allTheBooks = this.state.allBooks
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} toggleShelf={this.toggleShelf} submitForm={this.submitForm}/>
        <Bookshelf bookshelf={this.state.bookshelf} toggleShelf={this.toggleShelf}/>
      </div>
    );
  }
}

export default App;





// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import BookList from "./containers/BookList";
// import Bookshelf from "./containers/Bookshelf";

// // progress: I know the form is not working and I have ideas as to why. The form is set up to take in information but the page keeps rerendering. I think this has something to do with the componentDidMount. I want to extract the information, put it into a variable, and then pass this variable into the child component. I am just trying to figure out how to do so but the rerendering is making it difficult to grab values so console log when I submit the form. I just need a bit more time to play with this.

// class App extends Component {
//   state={
//     allBooks:[],
//     bookshelf:[],
//     bookData:[]
//   }

//   componentDidMount(){
//     // console.log("l")
//     fetch('http://localhost:3005/books')
//     .then(res=>res.json())
//     .then(data=>this.setState({bookData:data}), this.getBooks)
//     // this.getBooks()
//   }
//   getBooks=()=>{
//     this.setState({allBooks:[...this.state.bookData]})
//     console.log('allbooks', this.state.allBooks)
//   }

//   toggleShelf=(book)=>{
//     if(!this.state.bookshelf.includes(book)){
//       this.setState({bookshelf:[...this.state.bookshelf, book]})
//     }else{
//       this.setState({bookshelf:this.state.bookshelf.filter(book=>(book.title!==book.title))})
//     }

//     // console.log('book', book);
//   }

//   submitForm=(event, book)=>{
//     event.preventdefault()
//     // const allTheBooks = [...this.state.allBooks, book]
//     this.setState({allBooks:[...this.state.allBooks, book]})
//     console.log('b', book)
//   }

//   render() {
//     // const allTheBooks = this.state.allBooks
//     return (
//       <div className="book-container">
//         <BookList allBooks={this.state.allBooks} toggleShelf={this.toggleShelf} submitForm={this.submitForm}/>
//         <Bookshelf bookshelf={this.state.bookshelf} toggleShelf={this.toggleShelf}/>
//       </div>
//     );
//   }
// }

// export default App;