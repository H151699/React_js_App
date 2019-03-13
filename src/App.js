import React, { Component } from 'react';
import Todo from './components/Todo';

import './App.css';

class App extends Component {
  // components states
  state = {
    // objects
    todos: [
      {
        id: 1, 
        title: 'Throw the trash', 
        completed: true
      }, 

      {
        id: 2, 
        title: 'Feed Bjørn', 
        completed: true
      },

      {
        id: 3, 
        title: 'Dinner with Siri', 
        completed: false
      }
    ]
  }



  render() {
    return (
      <div className="App">
  
        <Todo todos={this.state.todos}/>


      </div>
    );
  }
}

export default App;
