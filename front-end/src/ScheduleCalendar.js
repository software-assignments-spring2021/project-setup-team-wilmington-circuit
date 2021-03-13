import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listGridPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!

import { getClassInfo } from './testData'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';


 
const ScheduleCalendar = props => {
    const [events, setEvents] = useState([])
    useEffect(() =>{
        props.classIDs.forEach(id =>{
            getClassInfo(id).then(classEvent => {
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
                            title: classEvent.name
                        }])
                        currentMeeting.setDate(currentMeeting.getDate() + 7);
                    }
                })
            })
        })
        console.log(events)
    }, [])

    return (
        <div>
          <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, listGridPlugin, bootstrapPlugin ]}
            themeSystem='bootstrap'
            buttonIcons={{
                close: 'fa-times',
                prev: 'fa-chevron-left',
                next: 'fa-chevron-right',
                prevYear: 'fa-angle-double-left',
                nextYear: 'fa-angle-double-right'
              }}
            nowIndicator = {true}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listWeek'
            }}
            events={events}
            initialView="timeGrid"
        />
        </div>
      )
}

export default ScheduleCalendar;