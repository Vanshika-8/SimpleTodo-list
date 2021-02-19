
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {TodoDate} from './TodoDate';
import {store} from '../../utilities/store';

export default class TodoList extends React.Component {
  state = {
    todos: []
  }
  addTodo = (todo) => {
    const todos=store.get('todos')
    const newTodos = [todo, ...todos]
    console.log(newTodos)
     store.save('todos', newTodos)
     this.setState({
       todos:newTodos
     })
    }


  toggleHandler = (id) => {
    const todos=store.get('todos')
    const changeTodos=todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }

      } else {
        return todo
      }

    })
    store.save('todos',changeTodos)
    this.setState({
      todos: changeTodos
    })

  }

  deleteHandler = (id) => {
     const filtered=this.state.todos.filter(todo=>todo.id !== id)
     this.setState({
      todos:filtered
       })
       store.save('todos',filtered)
     }

  render() {
    return (
       <div className="container">
       <TodoDate />
      <div className="list">
      <div className="total-tasks">
        Total Tasks: {this.state.todos.filter(todo=>!todo.complete).length}
      </div>
    
    <div className="completed-tasks">
      Completed Tasks: {this.state.todos.filter(todo=>todo.complete).length}
    </div>
     </div>
        {this.state.todos.map(todo => (

          <Todo className='item' key={todo.id}
            toggleHandler={() => this.toggleHandler(todo.id)}
            deleteHandler={() => this.deleteHandler(todo.id)}
            todo={todo}>
            
            </Todo>

        ))}
        <TodoForm onSubmit={this.addTodo} />
        
      </div>

    )
  }
}