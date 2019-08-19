import React from 'react';

class Button extends React.Component {

  render() {

    const { timer } = this.props
    return(
      <div >
        <h2>You have used {timer} seconds on this web </h2>
           <button onClick= {this.props.onClick }>
           {this.props.name}
           </button>
                         
      </div>
    );
  }

}
export default  Button;