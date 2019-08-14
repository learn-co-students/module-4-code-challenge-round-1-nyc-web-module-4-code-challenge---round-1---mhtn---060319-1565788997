import React, { Component } from "react";

//it recevies the following props FROM BOOKLIST:
// book = A book obj with id(#) title author img
//bookState = onBookList, onBookShelf that are true/false depending (Might not need this???)
//addBookToBookShelf 
//BookList Shows these books ALWAYS


//  
// state= {
//   onBookshelf: false
//   //if true, means it's also on Bookshelf
// }

// changeBookshelfStatus = () => {
//   this.setState({onBookshelf: false})
// }

class Book extends Component {
  
    state = {onBookList : true,
    onBookshelf: false}
  
    render() {
      return(
      <div>
        {console.log("Book props", this.props)}
        
        {this.state.onBookshelf ? <img src = {this.props.bookObj.img} alt="" ></img>
          : 
          <h2>{this.props.bookObj.title}</h2>
          <img src = {this.props.bookObj.img} alt="" ></img>
          <button onClick={() => this.props.addToBookshelf(this.props.bookObj)}>Add to Bookshelf</button>
          //And also change the state of OnBookShelf to true
        }
        
        
        {/* A way that Book knows whether it is on list or on shelf... */}
        
      </div>
      )
    };
};

export default Book;
