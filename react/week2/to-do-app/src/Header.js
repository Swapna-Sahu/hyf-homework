import React from 'react';

class Header extends React.Component {

  render() {
    return(
      <div style ={ {color: "black",borderSize :"1px",backgroundColor:"lightgrey",width: "500px"}}>
           <h1 style={ {textDecorationLine: 'underline', textDecorationStyle: 'solid',margin :'20px'}}>
           {this.props.title}
           </h1>
                         
      </div>
    );
  }

}
export default  Header;