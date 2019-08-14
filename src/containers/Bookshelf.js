import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{/*render list of books here*/}
      
      {/* go through bookListBooks map to create new Book objs */}
      
      {console.log("Bookshelf props", props)}
      </ul>
    </div>
  );
};

export default Bookshelf;
