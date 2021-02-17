import React, {useState} from 'react';

const TodoDate=(props)=>{
 const dataObject=new Date()
 const showcurrentDay=dataObject.toLocaleString('default',{weekday:'long'})
 const showcurrentDate=dataObject.getDate()
 const showcurrentMonth=dataObject.toLocaleString('default',{ month:'long'})
 const [dateObj, setDateObj] = useState(`${showcurrentDay},${showcurrentDate} ${showcurrentMonth}`)
 
  const timeZoneHandler=()=>{
    const showcurrentDay=dataObject.toLocaleString('default',{weekday:'short'})
    setDateObj(`${showcurrentDay},${showcurrentDate} ${showcurrentMonth} `)

 }

    return(
        <div id="date">{dateObj}
        <button style={{width:'24em'}} onClick={timeZoneHandler}>Current Time-Zone</button>
        </div>
       
 )


}


export default TodoDate;