"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export const calendarEvents = [
  // Tuesday - Dec 16, 2025
  {
    title: "Math",
    allDay: false,
    start: new Date(2025, 11, 16, 8, 0),
    end: new Date(2025, 11, 16, 8, 45),
  },
  {
    title: "English",
    start: new Date(2025, 11, 16, 9, 0),
    end: new Date(2025, 11, 16, 9, 45),
  },
  {
    title: "Biology",
    start: new Date(2025, 11, 16, 10, 0),
    end: new Date(2025, 11, 16, 10, 45),
  },
  {
    title: "Physics",
    start: new Date(2025, 11, 16, 11, 0),
    end: new Date(2025, 11, 16, 11, 45),
  },
  {
    title: "Chemistry",
    start: new Date(2025, 11, 16, 13, 0),
    end: new Date(2025, 11, 16, 13, 45),
  },
  {
    title: "History",
    start: new Date(2025, 11, 16, 14, 0),
    end: new Date(2025, 11, 16, 14, 45),
  },

  // Wednesday - Dec 17, 2025
  {
    title: "English",
    start: new Date(2025, 11, 17, 9, 0),
    end: new Date(2025, 11, 17, 9, 45),
  },
  {
    title: "Biology",
    start: new Date(2025, 11, 17, 10, 0),
    end: new Date(2025, 11, 17, 10, 45),
  },
  {
    title: "Physics",
    start: new Date(2025, 11, 17, 11, 0),
    end: new Date(2025, 11, 17, 11, 45),
  },
  {
    title: "History",
    start: new Date(2025, 11, 17, 14, 0),
    end: new Date(2025, 11, 17, 14, 45),
  },

  // Thursday - Dec 18, 2025
  {
    title: "Math",
    start: new Date(2025, 11, 18, 8, 0),
    end: new Date(2025, 11, 18, 8, 45),
  },
  {
    title: "Biology",
    start: new Date(2025, 11, 18, 10, 0),
    end: new Date(2025, 11, 18, 10, 45),
  },
  {
    title: "Chemistry",
    start: new Date(2025, 11, 18, 13, 0),
    end: new Date(2025, 11, 18, 13, 45),
  },
  {
    title: "History",
    start: new Date(2025, 11, 18, 14, 0),
    end: new Date(2025, 11, 18, 14, 45),
  },

  // Friday - Dec 19, 2025
  {
    title: "English",
    start: new Date(2025, 11, 19, 9, 0),
    end: new Date(2025, 11, 19, 9, 45),
  },
  {
    title: "Biology",
    start: new Date(2025, 11, 19, 10, 0),
    end: new Date(2025, 11, 19, 10, 45),
  },
  {
    title: "Physics",
    start: new Date(2025, 11, 19, 11, 0),
    end: new Date(2025, 11, 19, 11, 45),
  },
  {
    title: "History",
    start: new Date(2025, 11, 19, 14, 0),
    end: new Date(2025, 11, 19, 14, 45),
  },
];

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
