import React, { Component } from 'react';
import './App.css';
import TodoList from './components/SimpleTodo/TodoList';
import TodoDate from './components/SimpleTodo/TodoDate';



class App extends Component {
  render() {
    return (
      <div >
     
     <TodoList/>
 
   </div>
    );
  }
}

export default App;
