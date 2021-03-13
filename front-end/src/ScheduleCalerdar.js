import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
 
const localizer = momentLocalizer(moment)

const ScheduleCalendar = props => {
    const eventList = [];
    props.classes.forEach(classEvent => {
        eventList.push({
            start: 0
        })
    }
    )

    return (

        <div>
          <Calendar
            localizer={localizer}
            events={eventList}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      )
}

export default ScheduleCalendar;