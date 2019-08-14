import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  render() {

    let favoriteBooks = this.props.books.map(book => {
      return <Book
        key={book.id}
        book={book}
        clickHandler={this.props.clickHandler}/>
    }
  )
    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{favoriteBooks}</ul>
      </div>
    );
  }
}
;

export default Bookshelf;
