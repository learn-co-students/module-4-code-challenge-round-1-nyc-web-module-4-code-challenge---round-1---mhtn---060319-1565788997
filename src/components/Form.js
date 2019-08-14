import React from "react";

class Form extends React.Component {
  
  state={
    title:"",
    author:"",
    img:""
  }

  titleChange=event=>{
    // console.log(event.target.value);
    this.setState({title:event.target.value})
    
  }
  authorChange=event=>{
    // console.log(event.target.value);
    this.setState({author:event.target.value})
  }
  imgChange=event=>{
    // console.log(event.target.value);
    this.setState({img:event.target.value})
  }


  render() {
    return( 
      <div>
      <h1>Add a book</h1>
    <form onSubmit={(event)=>this.props.submitForm(event, this.state)}>
      <input type="text" onChange={this.titleChange} value={this.state.title}></input>
      <input type="text" onChange={this.authorChange} value={this.state.author}></input>
      <input type="text" onChange={this.imgChange} value={this.state.img}></input>
      <input type="submit"></input>

    </form>
    </div>)
  }
}

export default Form;
