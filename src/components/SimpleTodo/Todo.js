import React from 'react';
import './styles/style.css'




const Todo =(props) => {
    return (
       <div className="todo-items">
      
      <ul className="item">
     <li style={{
            textDecoration:props.todo.complete ? 'line-through' : ''
        }} > <input className="checkbox" type="checkbox" onClick={props.toggleHandler}/> 
        {props.todo.text} 
        <button onClick={props.deleteHandler} class="delete-button">X</button>
        </li>
 </ul>
 </div>
       
    );

}

export default Todo;
  


