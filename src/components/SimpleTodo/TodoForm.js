import React from 'react';
import plus from '../assets/plus.png'


export default class TodoForm extends React.Component{

state={
    text:'',
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


  

 render(){
        return(
            <form onSubmit={this.submitHandler}className="todo-form">
            <input name="text" value={this.state.text} onChange={this.changeHandler} type="text" className="todo-input" placeholder="Add todo"></input>
            <button  type="submit" className="add-button"><img src={plus} alt="Add Todo"></img></button>
          </form>
      
        )
    }
}