import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import TaskComponent from './Component';
const myTaskList = [ 
   // <TaskComponent description ="Get out of the bed" deadline = "EveryDay 6:30 am" />
    {
        description : "Get out of the bed",
        deadline : "EveryDay 6:30 am"
    },
    {
        description : "Brush your teeth",
        deadline : "EveryDay 6:35am"
    },
    {
        description : "Eat braekfast",
        deadline : "EveryDay 08:00 am"
    }
];

//ReactDOM.render(<App task = {myTaskList}/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Listitems description = "Hello World" deadline = "10"/>, document.getElementById('headername'));


