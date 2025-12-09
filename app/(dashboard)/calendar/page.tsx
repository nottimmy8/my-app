"use client";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalendarEvents, CalendarToolbar, EventCard } from "./CalendarData";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {/* Main Calendar */}
      <div className="col-span-3 bg-white rounded-xl shadow-md p-5 ">
        <Calendar
          localizer={localizer}
          events={CalendarEvents}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
          components={{
            event: EventCard,
            toolbar: CalendarToolbar,
          }}
          style={{ height: 800 }}
        />
      </div>
      {/* sidebar */}
      <div></div>
    </div>
  );
};

export default page;
