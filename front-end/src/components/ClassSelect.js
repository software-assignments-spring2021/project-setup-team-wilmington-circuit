import React, { useEffect, useState } from 'react'
import ClassDetails from './ClassDetails'
import { getClassInfo } from '../testData'

import "./styles/ClassSelect.css"
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTimeFormat(meetings){
  let meetingList = []
  meetings.forEach(meeting => {
    const meetingDate = new Date(meeting.beginDate)
    meetingList.push(
      `${weekday[meetingDate.getDay()]} ${meetingDate.toLocaleTimeString('en-US', {timeStyle: 'short'})}`
    )

  })
  return meetingList.join(', ');
}

export default function ClassSelect(props) {
    const [classObject, setClassObject] = useState({});
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
      if(props.classObject) setClassObject(props.classObject)
      else{
        getClassInfo(props.classID).then(res => {
          setClassObject(()=>res);
        })
      }
      setChecked(false)
    }, [props.classID])
    return (
       <div className="classElement card mx-auto border-light mb-3 mt-3">
          {!(props.catalog) ? 
            <div class="card-header pt-3">
            <h5>{classObject.name}</h5>
            </div>
           : <></> }
          <div class="card-body">
              <div className = "checkButton">
              <div className = "checkButtonInput">
              <input onChange={()=> {setChecked(!checked); props.onSelect(classObject)}} checked={checked} className = "checkButtonInput" class="form-check-input" type="checkbox"></input>
              </div>
              </div>
              <div className = "detailsButton">
                <ClassDetails {...classObject}/>
              </div>
              <p class="card-text">{classObject.instructors  ? classObject.instructors.toString() : 'TBD'} - {classObject.location}</p>
              <p class="card-text">{classObject.meetings ? getTimeFormat(classObject.meetings) : 'No Date'}</p>
          </div>
       </div> 
    )
}