import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.addBook}>
        <input type='text' placeholder='enter title' name='title'/>
        <input type='text' placeholder='enter author' name='author'/>
        <input type='text' placeholder='enter image' name='img'/>
        <input type='submit' value='submit'/>
      </form>
    )
  }
}

export default Form;
