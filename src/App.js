import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  render(){
    return(
      <div>
        <h1 className='App'>Welcome To ToDoApp</h1>
        <ToDoList/>
      </div>
    );
  }
}
export default App;
