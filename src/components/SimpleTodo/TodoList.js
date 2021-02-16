
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


export default class TodoList extends React.Component {
  state = {
    todos: []
  }
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos]
    this.setState({
      todos: newTodos
    })
  }
  toggleHandler = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }

        } else {
          return todo
        }
      })
    })

  }

  deleteHandler = (id) => {
    this.setState({
      todos:this.state.todos.filter(todo=>todo.id !== id)
    })

  }

  render() {
    return (
      <div className="container">
        {this.state.todos.map(todo => (

          <Todo className='item' key={todo.id}
            toggleHandler={() => this.toggleHandler(todo.id)}
            deleteHandler={() => this.deleteHandler(todo.id)}
            todo={todo}></Todo>

        ))}
        <TodoForm onSubmit={this.addTodo} />

      </div>

    )
  }
}