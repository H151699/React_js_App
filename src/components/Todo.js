import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todo extends Component {
  render() {
    return this.props.todos.map((td) => ( // like forEach loop
       <Todoitem key={td.id} td = {td} />
    ));
  }
}

// PropTypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;
