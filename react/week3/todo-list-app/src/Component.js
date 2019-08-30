import React from 'react';
//import Checkbox from './Checkbox';
//import Button from './Button';
// to create new task for your To Do lIst
class TaskComponent extends React.Component {
 state ={
    description: this.props.description,
  checked: false  
 }
 
  render() {
//console.log("state of taskcomponent",this.props.description)
    return(
      this.props.isEditMode ? 
      <div
      style ={ {color: "black",
      borderColor :"red",
      backgroundColor:"lightgrey",
      width: "600px",
      fontWeight:"bold", 
      height:"30px",
      marginLeft : "30px"}}>
          <input type="text" value = {this.state.description} onChange={(e) => this.setState({ description: e.target.value }) }/>
              <button onClick ={()=>{this.props.updateComponent( this.props.id, this.state.description )}}>update</button>
            
      </div> :
        <div 
          style ={ {color: "black",
          borderColor :"red",
          backgroundColor:"lightgrey",
          width: "600px",
          fontWeight:"bold", 
          height:"30px",
          marginLeft : "30px"}}>
            
            <p   onClick={this.props.editText} style={this.props.done ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}>
            {this.props.id} ) {this.props.description} || {this.props.deadline}
            <input type="checkbox" onChange= {(e)=> this.props.onChangehandler(e,this.props.id)} checked={this.props.done}/>  
            <button onClick ={ ()=> {this.props.deleteTask(this.props.id) }} >Delete</button>
            <button onClick ={this.editText}>Edit</button>
            </p> 

          </div>
      
    );
  }

}



export default  TaskComponent;