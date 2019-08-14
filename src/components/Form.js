import React from "react";

const OG_STATE = {
  title: "",
  author: "",
  img: ""
}

class Form extends React.Component {



  state = {
    title: "",
    author: "",
    img: ""
  }

  changeHandler = (event) => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => { this.props.submitHandler(e, this.state); this.setState(OG_STATE) }}>
        <label>Title:</label>
        <input onChange={this.changeHandler} name="title" type="text" value={this.state.title} />
        <label>Author:</label>
        <input onChange={this.changeHandler} name="author" type="text" value={this.state.author} />
        <label>Image URL:</label>
        <input onChange={this.changeHandler} name="img" type="text" value={this.state.img} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
