import React, { Component } from 'react';
import './App.css';
import TodoList from './components/SimpleTodo/TodoList';
import TodoDate from './components/SimpleTodo/TodoDate';
import TrialBasis from './components/Teaching';



class App extends Component {
  render() {
    return (
      <div >
     
     <TodoList/>
 <TrialBasis/>
   </div>
    );
  }
}

export default App;
