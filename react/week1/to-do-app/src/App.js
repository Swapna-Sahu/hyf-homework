import React from 'react';
import TaskComponent from './Component';


class App extends React.Component {
  render() {
console.log(this.props);
const {todolist} = this.props;
//const tasks = {todolist}.map(todo => {
//  return (<TaskComponent description = {todo.description} deadline={todo.deadline}/>);
//});
    return(
      <div id="headername">
           <h1>To Do List</h1>
    
              <table width="500" border ="1px" color="black">
                    <tr >
                      <th width="50%">
                        Description
                      </th>
                      <th width="50%">
                        Deadline
                      </th>
                    </tr>
              </table>
           <TaskComponent description = "Get out of the bed" deadline = "EveryDay 6:30 am "/>
           <TaskComponent description = "Brush your teeth" deadline ="EveryDay 6:35 am" />
          <TaskComponent description = "Eat breakfast" deadline ="EveryDay 08:00 am" />
          
      </div>
      
     // todolist.map((task) =>{ 
      //     <TaskComponent description = {this.props.task.description} deadline = {this.props.task.deadline} />
           
     // });
    );
  }

}

export default  App;