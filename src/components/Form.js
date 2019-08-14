import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSumbit = (event) => {
    event.preventDefault()
    const book = {title: this.state.title, author: this.state.author, img: this.state.img}
    this.props.addBookToList(book)
    this.setState({title: ""})
    this.setState({author: ""})
    this.setState({img: ""})
  }

  render() {
    return (
      <div>
        <h2>New Book Form</h2>
        <form onSubmit={(event) => this.handleSumbit(event)}>
          <input type="text" name="title" placeholder="title" value={this.state.title} onChange={(event) => this.handleChange(event)}/>
          <input type="text" name="author" placeholder="author" value={this.state.author} onChange={(event) => this.handleChange(event)}/>
          <input type="text" name= "img" placeholder="img" value={this.state.img} onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
