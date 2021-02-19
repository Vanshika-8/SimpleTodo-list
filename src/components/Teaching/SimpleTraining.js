import React from 'react'

export default function SimpleTraining(props) {//props are passed into the function
    const calculateData=(data)=>{//argument passed
        const addData =handleAddData(data.value1,data.value2)
        //undefined
        if(addData){//if var adddata has a value then only enter
            console.log('addData:', addData)
            props.submit(addData)//calculated add and passed it //functional props
            return;
        }
        console.log('came here')
        // props.submit()

    }
    const handleAddData=(d,e)=>{//a and b are parameters
        const addData=d +e ;
        // if(addData>0){
        //     return null
        // }
        return addData
        console.log('addData:', addData)
        
    }
    const printData=()=>{
        //normal code block with jsx to display data
      return  <h1>Print this</h1>
    }
    return (
        <div>
          {/**we are calling the calculate data function and passing props to it*/}
        {/**The use of this anonymous functi on/ arrow function use here only when the function is clicked on will it get invoked*/}
       {printData()}
          <button
             onClick={()=>calculateData(props)}>Calculate data</button>
            
        </div>
    )
}
