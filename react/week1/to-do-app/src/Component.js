import React from 'react';

// to create new task for your To Do lIst
class TaskComponent extends React.Component {
  render() {

    return(
      <div>
           
              <table width="500" border ="1px" color="black">
                    <tr >
                      <td width="50%">
                        {this.props.description}
                      </td>
                      <td width="50%">
                        {this.props.deadline}
                      </td>
                    </tr>
              </table>

             
      </div>
    );
  }

}



export default  TaskComponent;