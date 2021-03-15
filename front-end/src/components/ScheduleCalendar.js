import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listGridPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ScheduleCalendar.css'
//import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!

import { getClassInfo } from '../testData'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';


 
const ScheduleCalendar = props => {
    const [events, setEvents] = useState([])

    useEffect(() =>{
        setEvents([])
        console.log(props.classIDs);
        props.classIDs.forEach(id =>{
            getClassInfo(id).then(classEvent => {
                if(!(classEvent.meetings)) return;
                classEvent.meetings.forEach(meeting => {
                    let currentMeeting = new Date(meeting.beginDate.split(' ').join('T'))
                    const end = new Date(meeting.endDate.split(' ').join('T'))
                    const duration = meeting.minutesDuration;
                    while(currentMeeting < end){
                        const end = new Date(currentMeeting);
                        end.setMinutes(end.getMinutes() + duration);
                        setEvents(prev => [...prev, {
                            start: new Date(currentMeeting),
                            end: end,
                            title: classEvent.name,
                            extendedProps: {
                                location: classEvent.location,
                                instructors: classEvent.instructors
                            }
                        }])
                        currentMeeting.setDate(currentMeeting.getDate() + 7);
                    }
                })
            })
        })
    }, [props.classIDs])

    return (
        <div style={{'width': '95%'}} class = "mx-auto">
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listGridPlugin, bootstrapPlugin ]}
            themeSystem='bootstrap'
            nowIndicator = {true}
            nowIndicatorClassNames = {['nowIndicator']}
            bootstrapFontAwesome={false}
            scrollTime='08:00:00'
            expandRows={true}
            slotDuration='00:15:00'
            slotLabelInterval='01:00:00'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listWeek'
            }}
            buttonText ={{
                today:    'Today',
                month:    'Month',
                week:     'Week',
                day:      'Day',
                list:     'List',
                prev: '<<',
                next: '>>'

              }}
            events={events}
            eventContent = {renderEventContent}
            eventClassNames = {['scheduleEvent']}
            initialView="timeGridWeek"
            rerenderDelay={5}
        />
        </div>
      )
}

const renderEventContent = eventInfo => {
    if(eventInfo.view.type === "timeGridWeek")
    return (
        <div class="timeGridEvent">
            <h className="classTime">{eventInfo.timeText}<br></br></h>
            
            <b>{eventInfo.event.title}</b>
            <br></br>
            <i className="classDetails">{eventInfo.event.extendedProps.location} - {eventInfo.event.extendedProps.campus || 'NYU'}</i>
        </div>
    )
}

export default ScheduleCalendar;