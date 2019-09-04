import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './App.css';

export default class App extends React.Component {

  state = {
      isloading: true,
      user :[],
      userName : "",
      query :""
  };
 
  componentDidMount () {
    console.log("inside the component did mount");
    
  }
/*componentDidUpdate(prevProps,prevState) {
  console.log("component previous state1",prevState.user!== this.state.user);
  console.log("component current state2",this.state.user);

}*/

  handleInput=(e)=> {
    this.setState({
    userName : e.target.value
    })
  };

  handleClick= (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${this.state.userName}`)
    .then(res => res.json())
    .then(data => this.setState({ 
      user : data.items,
      isloading:false})
      )
    .catch(err => console.log(err))
  }
  
  render() {
    const {user , userName} = this.state; 
     console.log(userName, user);
    
    const userDetails = user.map(userAccount => 
      <div>
        <h1 key={userAccount.id}>{userAccount.login}</h1>
        <img  src={userAccount.avatar_url} alt="userphoto" width="200px"/>
      </div>
    );
     
    if(user === undefined) {
				return (<h1>Not found </h1> );		
    }
    return(
      <div className ="App">
      <MuiThemeProvider>
      <AppBar  title="GitHub User" />
      <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(e) => this.handleInput(e)}
      /><br/>
      <RaisedButton label="Submit" primary={true} style={style}  onClick={(e) => this.handleClick(e)}/>
      </MuiThemeProvider>
       { this.state.isloading ? <div>Loading....</div>: 
        <div>
        {userDetails}
        </div>
        }
      </div>
    );
  }
}
const style = {
  margin: 15,
};

