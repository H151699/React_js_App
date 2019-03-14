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
    // markCcomplete (e){
    //   console.log(this.props)
    // }


  /********** render()****** ********************/
    render() {
      const {id, title} = this.props.td;


    return (
        // style background of the todoItems
        // add CheckBox and onChangeListenner; Call markComplete method when Check the checkbox
        
      <div style ={this.getStyle()}>

        
        <p> 
           <input type="checkbox" onChange = {this.props.markComplete
            .bind(this, id)}/>{' '}
                  {title} 
                   
                   <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}> X</button>
        </p>
       

      </div>
      
    )
  }
}

// PropTypes
Todoitem.propTypes = {
    td: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}

// Button Style
const btnStyle = {
  backgournd: '#ff0000',
  color: '#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}





export default Todoitem
