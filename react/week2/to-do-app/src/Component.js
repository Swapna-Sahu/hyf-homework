import React from 'react';
//import Checkbox from './Checkbox';
//import Button from './Button';
// to create new task for your To Do lIst
class TaskComponent extends React.Component {
 state ={
  checked: false  
 }
 
  render() {
    console.log("inside TaskComponent",this.props);
    return(
      
          <div 
          style ={ {color: "black",
          borderColor :"red",
          backgroundColor:"lightgrey",
          width: "400px",
          fontWeight:"bold", 
          height:"30px",
          marginLeft : "30px"}}>
            
            <p style={this.props.done ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}>
            {this.props.id} ) {this.props.description} || {this.props.deadline}
            <input type="checkbox" onChange= {this.props.Onchangehandler} checked={this.props.done}/>  
            <button onClick= {this.props.deleteTask } >Delete</button>
            </p> 

          </div>
      
    );
  }

}



export default  TaskComponent;