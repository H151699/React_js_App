import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
// import uuid from 'uuid';
import './App.css';
import Axios from 'axios';

class App extends Component {
  // components states
  state = {
    // objects
    todos: [  






      // {
      //   id: uuid.v4(), 
      //   title: 'Throw the trash', 
      //   completed: false
      // }, 

      // {
      //   id:uuid.v4(), 
      //   title: 'Feed Bjørn', 
      //   completed: false
      // },

      // {
      //   id: uuid.v4(), 
      //   title: 'Dinner with Siri', 
      //   completed: false
      // }
    ]
  }

// Axios
  componentDidMount()
{
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(res => this.setState({todos: res.data}))
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

  Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
  .then(res => this.setState({todos: [...this.state.todos.filter
    (td =>  td.id !== id)] }));
  //this.setState({todos: [...this.state.todos.filter(td =>  td.id !== id)]})
  }

// Add Todo
addTodo = (title) => {

  Axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => this.setState({todos:
       [...this.state.todos, res.data] }));
  // const newTodo ={
  //   id: uuid.v4(), // install uuid to get the random id
    
  //   title, 
  //   completed: false
  // }
  // this.setState({todos: [...this.state.todos, newTodo] });
}

  render() {
    return (
      
      // add Router
      <Router>
        <div className="App">
          
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
               <AddToDo  addTodo = {this.addTodo}/>
              <Todo todos={this.state.todos} markComplete = {this.markComplete}
                delTodo = {this.delTodo}/>
              
            </React.Fragment>
          )} />


          <Route path="/about" component ={About} />
         
        </div>
      </Router>
    );
  }
}

export default App;
