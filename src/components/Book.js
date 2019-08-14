import React, {Component} from "react";

class Book extends Component{
  render(){
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <img alt="" src={this.props.book.img} onClick={(event) => {this.props.addToShelf(this.props.book)}}/>
      </div>
    );
  };
}


export default Book;
