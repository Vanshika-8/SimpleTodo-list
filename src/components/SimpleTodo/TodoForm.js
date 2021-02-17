import React from 'react';
import plus from '../assets/plus.png'
import TodoList from './TodoList';

export default class TodoForm extends React.Component{

state={
    id:Math.random(),
    text:'',
    complete:false
}
  
changeHandler=event=>{
this.setState({
    [event.target.name]:event.target.value
})
}

submitHandler=(event)=>{
    event.preventDefault();
    this.props.onSubmit({
        id:Math.random(),
        text:this.state.text,
        complete:false
    })
      
    this.setState({
        text:''
    })
}


  handleFormSubmit = () => {
    //   const todos=[]
    // const { id,text, complete } = this.state;
    // localStorage.setItem('id', id);
    // localStorage.setItem('text',text);
    // localStorage.setItem('complete' , complete ? complete : true)
    //  todos.push(this.state)
    //  console.log(todos)
    
    //test case 1:NO TODOS: 
    /* if we submit a todo item , there will be a list of todos in the local storage and it will present on the dom
    */
   //test case 2:Items already present in local storage
   /* We will added items to the existing list in the  local storage.  
   */

  };

 render(){
        return(
            <form onSubmit={this.submitHandler}className="todo-form">
            <input name="text" value={this.state.text} onChange={this.changeHandler} type="text" className="todo-input" placeholder="Add todo"></input>
            <button  type="submit" className="add-button"><img src={plus} alt="Add Todo"></img></button>
          </form>
      
        )
    }
}