"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary events data
const events = [
  {
    id: 1,
    time: "12-00 PM  ",
    grade: "All Grade ",
    description: "Homeroom & Announcement",
  },
  {
    id: 2,
    time: "4:00 PM  ",
    grade: "Grade 3-5",
    description: "Math Review & Practice",
  },
  {
    id: 3,
    time: "10:00 AM ",
    grade: "Grade 6-8",
    description: "Science Experiment & Discussion",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className=" bg-white p-4 rounded-2xl ">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4 ">Agenda</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4     ">
        {events.map((event) => (
          <div
            className=" flex items-center  justify-items-start shadow-md rounded-2xl  odd:bg-[#f3fafd] even:bg-[#fcf7d9] p-4 "
            key={event.id}
          >
            <h1 className="text-sm text-gray-700">{event.time} </h1>
            <div className="ml-2   border-2 border-white h-[50px] rounded-full"></div>
            <div className="ml-2  ">
              <span className=" text-sm text-gray-500">{event.grade} </span>
              <h1 className="text-sm font-semibold text-gray-700">
                {event.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
