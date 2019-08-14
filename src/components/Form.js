import React from "react";

class Form extends React.Component {


  state = {
    title: "",
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
      <form onSubmit={e => this.props.submitHandler(e, this.state)}>
        <label>Title:</label>
        <input onChange={this.changeHandler} name="title" type="text" value={this.state.title} />
        <label>Image URL:</label>
        <input onChange={this.changeHandler} name="img" type="text" value={this.state.img} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
