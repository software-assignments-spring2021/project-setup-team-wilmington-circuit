import { Calendar, momentLocalizer } from 'react-schedule-calendar';
import moment from 'moment';
import { getClassInfo } from './testData'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
 
const ScheduleCalendar = props => {
    const eventsList = [];
    props.classIDs.forEach(id =>{
        getClassInfo(id).then(classEvent => {
            classEvent.meetings.forEach(meeting => {
                
                let currentMeeting = new Date(meeting.beginDate.split(' ').join('T'))
                const end = new Date(meeting.endDate.split(' ').join('T'))
                console.log(currentMeeting, end)
                const duration = meeting.minutesDuration;

                while(currentMeeting < end){
                    const end = new Date(currentMeeting);
                    end.setMinutes(end.getMinutes() + duration);
                    eventsList.push({
                        start: new Date(currentMeeting),
                        end: end,
                        title: classEvent.name
                    })
                    currentMeeting.setDate(currentMeeting.getDate() + 7);
                    console.log(currentMeeting)
                }
            })
        })
    })
    console.log(eventsList)
    return (
        <div>
          <Calendar
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      )
}

export default ScheduleCalendar;