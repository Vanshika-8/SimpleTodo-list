import React, { Component } from 'react'
import SimpleTraining from './SimpleTraining'

export default class TrialBasis extends Component {
    state={
        isClicked:false,
        content:''
    }
    clickHandler=()=>{
        console.log('clicked on a button')
        //toggling the state of a boolean value
        // this.setState({isClicked:!this.state.isClicked})
        this.setClickState()
    }
    setClickState=()=>{
        this.setState({isClicked:!this.state.isClicked})
    }
    handleSubmit=(data)=>{
        console.log('data:', data)
        //pass value to set value content function
        this.setValueContent(data)
    }
    setValueContent=(wekrhwkerhkwe)=>{//paramter can be anyname
        console.log('wekrhsdfsfsdfsdfwkerhkwe:', wekrhwkerhkwe)
        
        this.setState({content:wekrhwkerhkwe})
    }
    render() {
        return (
            <div>
            {/**On click event handler */}
                <button onClick={this.clickHandler} 
                        name={'abc'}>Click Me</button>
             {/**Custom component */}
                <SimpleTraining
                    value1={1}//props
                    value2={2}//props
                    submit={this.handleSubmit}//props
                    changeTrial={this.clickHandler}
                    styles={{}}
                />
                <div>{this.state.content}</div>
            </div>
        )
    }
}
