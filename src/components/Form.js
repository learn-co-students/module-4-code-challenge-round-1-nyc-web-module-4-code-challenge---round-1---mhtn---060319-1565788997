import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: "",
  }
  
  
  changeHandler = () => {
    let nameOfInput = event.target.name
    return this.setState({[nameOfInput]: event.target.value})
  }
  
  
  render() {
    return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={()=> this.addNewBook(this.state)}>
        <input type="text" placeholder="Please input the title" value={this.state.title} onChange ={this.changeHandler}></input>
        <input type="text" placeholder="Please input the author" value={this.state.author} onChange ={this.changeHandler}></input>
        <input type="text" placeholder="Please input the img" value={this.state.img} onChange ={this.changeHandler}></input>
      </form>
    </div>
    )
  }
}

export default Form;
