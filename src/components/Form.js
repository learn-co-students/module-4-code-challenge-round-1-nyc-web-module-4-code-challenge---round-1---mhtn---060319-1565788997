import React from "react";

class Form extends React.Component {
  state={
  }

  render() {
    console.log("Form props!", this.props)
    return(
    
    <form onSubmit={((e)=>this.props.handleNewFormSubmit(e)) }>
      <label>
        Title:
        <input type="text" name="title" value={this.props.title} onChange={((e)=>this.props.handleNewFormChange(e)) } />
      </label>

      <label>
       Author:
        <input type="text" name="author" value={this.props.author} onChange={((e)=>this.props.handleNewFormChange(e)) } />
      </label>

      <label>
        Image:
        <input type="text" name="img" value={this.props.img} onChange={((e)=>this.props.handleNewFormChange(e)) } />
      </label>

      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default Form;
