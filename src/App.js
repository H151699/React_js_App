import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  // components states
  state = {
    // objects
    todos: [  
      {
        id: 1, 
        title: 'Throw the trash', 
        completed: false
      }, 

      {
        id: 2, 
        title: 'Feed Bjørn', 
        completed: false
      },

      {
        id: 3, 
        title: 'Dinner with Siri', 
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed =!todo.completed

      } 
      return todo;
    }) });
  }




//Delete Todo， filter out and return the not-deleted items
delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(td =>  td.id !== id)]})
}
  render() {
    return (
      <div className="App">

        <Header />
        <Todo todos={this.state.todos} markComplete = {this.markComplete}
          delTodo = {this.delTodo}/>


      </div>
    );
  }
}

export default App;
