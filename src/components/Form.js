import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleChangeAuthor = (event) => {
    this.setState({author: event.target.value})
  }

  handleChangeImg = (event) => {
    this.setState({img: event.target.value})
  }

  render() {
    return <h1>{
      <form onSubmit={(event) => {return this.props.newBook(event, this.state)}}>
        <input type="text" onChange={this.handleChangeTitle} value={this.state.title} placeholder="title"/>
        <input type="text" onChange={this.handleChangeAuthor} value={this.state.author} placeholder="author"/>
        <input type="text" onChange={this.handleChangeImg} value={this.state.img} placeholder="img"/>
        <button>Submit</button>

      </form>

    }</h1>;
  }
}

export default Form;
