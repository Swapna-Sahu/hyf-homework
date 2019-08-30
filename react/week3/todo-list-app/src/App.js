import React from 'react';
import Header from './Header';
import TaskComponent from './Component';
//import Button from './Button';

export default class App extends React.Component {
constructor(props){
super(props);
var today = new Date(),
date =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      description: '',
      deadline: date,
      tasks :[],
      editMode : null,
      timer:0
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
   console.log("inside the component did mount");
   fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
   .then(res => res.json())
   .then(data => this.setState({tasks : data }));
  
	/*	var intervalId = setInterval(() => {
			this.setState({
				timer: this.state.timer + 1
			})
		}, 1000)
		this.setState({
			intervalId: intervalId
		})*/
  }
  /*componentWillUnmount () {
		clearInterval(this.state.intervalId)
  } */
  
addNewToDo =  (RandomTask,Deadline) => {
    let taskLength = this.state.tasks.length;
     const newItem ={id : `${taskLength +1}`, description: "RandomTask",deadline :" Anytime",done:false };    
     const newTaskLists = [...this.state.tasks,newItem];
        this.setState({ tasks:newTaskLists,},
         () => { console.log("newItem is: " + this.state.tasks);}
        );   
}
  
handleSubmit(event) {
       alert('A task was submitted: ' + this.state.description+
               ' deadline :' + this.state.deadline);
      this.addNewToDo(this.state.description,this.state.deadline);
      event.preventDefault();
}

handleChange(event) {
        const target = event.target;
        const name = target.name;
         this.setState({
            [name]: event.target.value
         });
}

deleteTaskHandler = taskid => {
    const filteredTasks = this.state.tasks.filter(task => task.id !== taskid)
    this.setState({
      tasks: filteredTasks
    })
}

changeEditMode =(event,id) => {
  console.log("I am inside changeeditMode")
  this.setState(prevState => {
  const updatedTask = prevState.tasks.map(task => {
       if (task.id === id) {
           this.setState({editMode : id })    
        }
        return task
  })
  return {tasks: updatedTask}
})}

updateComponentValue =(id,description) => {
  const newTasks = this.state.tasks.map(task => task.id === id ? {...task, description } : task)
  this.setState({ tasks: newTasks, editMode: null });
 
}

handleCheckboxChange = (event,id) => {
      this.setState(prevState => {
        const updatedTask = prevState.tasks.map(task => {
                           if (task.id === id) {  task.done = !task.done }
                             return task
                            })
        return { tasks: updatedTask }
      })
}


render() {
 
    const {tasks} = this.state;  
    const taskList = tasks.map(todo => {
                  return (<TaskComponent 
                    key = {todo.id} id={todo.id} description = {todo.description} deadline={todo.deadline} done ={todo.done}
                    deleteTask ={this.deleteTaskHandler} onChangehandler ={this.handleCheckboxChange} 
                    updateComponent={this.updateComponentValue}
                    editText={(e)=>this.changeEditMode(e,todo.id)}
                    isEditMode = {this.state.editMode === todo.id}
                    defaultChecked={this.state.checked}/>);
                  });

    return (
      <div>
         <Header title = "Todo List"/>
          <h2>You have used {this.state.timer} seconds on this web  </h2>

          <form onSubmit={this.handleSubmit} style ={ {marginLeft : "30px"}}>
           <label>
               Description  :  
           <input type="text" value={this.state.description} onChange={this.handleChange} name = "description"/> <br/>
               Deadline  :  
           <input type="date"  date = {this.state.deadline}onChange={this.handleChange} name = "deadline"
            />
           </label><br/>
           <input type="submit" value="Submit" />
          </form>
          <div>
            <p style ={!tasks.length ?{ fontWeight :"bold",color : "black"}:{ color : "white"}}>No Tasks </p>
            <p style={this.checked ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}
              >{taskList}</p>
          </div>    
        </div>
      );
  }
}

