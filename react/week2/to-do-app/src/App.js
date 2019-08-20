import React from 'react';
import TasksList from './Taskslist';
import TaskComponent from './Component';
import Header from './Header';
import Button from './Button';


class App extends React.Component {
  state = {
    tasks :TasksList,
    timer:0
  };

 componentDidMount () {
		var intervalId = setInterval(() => {
			this.setState({
				timer: this.state.timer + 1
			})
		}, 1000)
		this.setState({
			intervalId: intervalId
		})
  }
  componentWillUnmount () {
		clearInterval(this.state.intervalId)
	}
  

   addNewToDo =  () => {
     let taskLength = this.state.tasks.length;
    console.log(taskLength);
    console.log("inside the addNewTODo",this.state.tasks);
    const newItem ={id : `${taskLength +1}`, description: "RandomTask",deadline :" Anytime",done:false };    
    const newTaskLists = [...this.state.tasks,newItem];
     this.setState({
      tasks:newTaskLists,
     },
     () => {
      console.log("newItem is: " + this.state.tasks);
     }
     );

      

    }
      
    deleteTaskHandler = taskid => {
      const filteredTasks = this.state.tasks.filter(task => task.id !== taskid)
  console.log("inside delete func",taskid);
      this.setState({
        tasks: filteredTasks
      })
    }

    handleCheckboxChange = (event,id) => {
      console.log("inside handlecheckbox",id);
     
     this.setState(prevState => {
      const updatedTask = prevState.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task
      })
      return {
        tasks: updatedTask
      }
    })
   }
  
  render() {
   
    const {tasks} = this.state;
    console.log("inside app",tasks);
    const taskList = tasks.map(todo => {
                  return (<TaskComponent 
                    key = {todo.id} id={todo.id} description = {todo.description} deadline={todo.deadline} done ={todo.done}
                    deleteTask ={() => this.deleteTaskHandler(todo.id)} Onchangehandler ={(e)=>this.handleCheckboxChange(e,todo.id)} 
                    defaultChecked={this.state.checked}/>);
                  });
                  
    return(
      <div>
           <Header title = "To Do List"/>
           <Button name = "Add To Do" onClick = {this.addNewToDo}  timer={this.state.timer}/>  
           <p style={this.checked ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}>{taskList}</p>
                
          
      </div>      
     );
  }

}

export default  App;
