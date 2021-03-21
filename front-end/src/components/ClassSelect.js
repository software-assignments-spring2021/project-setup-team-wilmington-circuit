import React from 'react'
import ClassDetails from './ClassDetails'

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
    const classObject = props
    return (
       <div className="classElement card mx-auto border-light mb-3 mt-3">
          {!(props.catalog) ? 
            <div class="card-header pt-3">
            <h5>{props.name}</h5>
            </div>
           : <></> }
          <div class="card-body">
              <div class = "" style = {{float: 'right'}}>
              <input class="form-check-input" type="checkbox"  style = {{width: '20px', height: '30px'}}></input>
              </div>
              <div class = "mr-5" style = {{float: 'right'}}>
                <ClassDetails {...classObject}/>
              </div>
              <p class="card-text">{classObject.instructors  ? classObject.instructors.toString() : 'TBD'} - {classObject.location}</p>
              <p class="card-text">{classObject.meetings ? getTimeFormat(classObject.meetings) : 'No Date'}</p>
          </div>
       </div> 
    )
}