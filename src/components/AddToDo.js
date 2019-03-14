import React, { Component } from 'react'

export class AddToDo extends Component {
    // add state value
    state = {
        title: ''
    }

    // onChange state
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    // onSubmit
    onSubmit = (e) => {
        e.preventDefault(); // 
        this.props.addTodo(this.state.title); // pass the data/title
        this.setState({title:''});// clear field
    }

  render() {
    return (
      <form 
        onSubmit={this.onSubmit}
        style ={{display: 'flex'}}>
          <input 
            type="text" 
            name="title" 
            style={{flex: '10', padding: '5px'}}
            placeholder="Add ToDo item..." 
            value ={this.state.title}
            onChange={this.onChange}
            />
            
            
            <input 
                type= "submit"
                value="Submit"
                className="btn"
                style={{flex: 1}}

                />
      </form>
    )
  }
}

export default AddToDo
