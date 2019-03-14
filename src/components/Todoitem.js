// auto generate:  rce + tab 
 
import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class Todoitem extends Component {
    

  /********** getStyle() ********************/
    getStyle = () => {

        return{
            backgournd: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',

            textDecoration: this.props.td.completed ? 'line-through' : 'none'
        }
        
    } //getTstle

  /********** markComplete() ********************/
    markCcomplete (e){
      console.log(this.props)
    }


  /********** render()****** ********************/
    render() {
    return (
        // style background of the todoItems
        // add CheckBox and onChangeListenner
      <div style ={this.getStyle()}>

        
        <p> 
            <input type="checkbox" onChange={this.markCcomplete.bind(this)}/>{' '} 
          {/* <input type="checkbox" onChange={this.markCcomplete.bind(this)}/>{' '}  */}
            
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
