import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }
  handleChange = (event) => {
    if(event.target.name === "title"){
      this.setState({title: event.target.value})
    }
    else if(event.target.name === "author"){
      this.setState({author: event.target.value})
    }
    else if(event.target.name === "img"){
      this.setState({img: event.target.value})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook(this.state)
    this.setState({title: "", author: "", img: ""})
  }
  render() {
    return <div>
      <h1>Add a new Book</h1>
      
      <form onSubmit={this.handleSubmit}>
        <label>
          title:
          <input type="text" name = "title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name = "author" value={this.state.author} onChange={this.handleChange} />
        </label>
        <label>
          Img:
          <input type="text" name = "img" value={this.state.img} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    ;
  }
}

export default Form;
