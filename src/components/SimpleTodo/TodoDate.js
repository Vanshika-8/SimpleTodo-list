import React, {useState} from 'react';

export const TodoDate=(props)=>{
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
        <button className="btn__timezone" onClick={timeZoneHandler}>Current Time-Zone</button>
        </div>
       
 )


}

 