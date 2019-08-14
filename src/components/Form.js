import React from "react";

class Form extends React.Component {

  //needed more time to figure out how to get values input in form to be added to BookList

  render() {
    console.log("form props", this.props)
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="title"
          type="text"
          value={this.props.title}
          placeholder="title"
          onChange={this.props.handleAddForm}/>
        <input
          name="author"
          type="text"
          value={this.props.author}
          placeholder="author"
          onChange={this.props.handleAddForm}/>
        <input
          name="title"
          type="text"
          value={this.props.img}
          placeholder="image"
          onChange={this.props.handleAddForm}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default Form
