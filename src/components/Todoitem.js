// auto generate:  rce + tab 
// change change
import React, { Component } from 'react'
import PropTypes from 'prop-types';

// change

export class Todoitem extends Component {
    
    getStyle = () => {

        return{
            backgournd: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',

            textDecoration: this.props.td.completed ? 'line-through' : 'none'
        }
        
    } //getTstle

    render() {
    return (
        // style background of the todoItems
      <div style ={this.getStyle()}>
        <p> 
            <input type="checkbox"/>{' '}
        </p>
         <p> {this.props.td.title} </p>
      </div>
      // test git
    )
  }
}

// PropTypes
Todoitem.propTypes = {
    td: PropTypes.object.isRequired
}




export default Todoitem
