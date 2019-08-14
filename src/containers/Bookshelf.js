import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component{


// const Bookshelf = props => {
  
  render(){
    
    let faveBookObjs = this.props.favoriteBooks.map( b =>{
      return <Book bookData={b} 
      handleBookShelfClick={this.props.handleBookShelfClick} 
      handleBookListClick={this.props.handleBookListClick} />
    })

    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{faveBookObjs}</ul>
      </div>
    );
  };


}
export default Bookshelf;
