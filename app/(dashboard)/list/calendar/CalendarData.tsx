"use client";

export interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  category: string;
  color: string;
}

export const CalendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "Science Fair Setup",
    start: new Date(2030, 4, 8, 8, 0),
    end: new Date(2030, 4, 8, 10, 0),
    category: "Science Club",
    color: "bg-blue-200 text-blue-700",
  },
  {
    id: 2,
    title: "Teacher Meeting",
    start: new Date(2030, 4, 8, 11, 0),
    end: new Date(2030, 4, 8, 12, 0),
    category: "All Teacher",
    color: "bg-yellow-200 text-yellow-800",
  },
];

interface calendarToolbarProps {
  label: string;
  onView: any;
}

export function CalendarToolbar({ label, onView }: calendarToolbarProps) {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="font-semibold text-lg">{label}</h2>

      <div className="flex bg-gray-100 rounded-full">
        {["month", "week", "day"].map((view) => (
          <button
            key={view}
            onClick={() => onView(view)}
            className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white"
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function EventCard({ event }: any) {
  return (
    <div
      className={`rounded-md text-xs px-2 py-1 font-medium shadow-sm ${event.color}`}
    >
      {event.title}
    </div>
  );
}

export default function SidebarAgenda() {
  const agendaItems = [
    {
      label: "Big Day and Celebration Day",
      color: "bg-purple-100 text-purple-700",
    },
    {
      label: "Subject Presentation & Exam",
      color: "bg-blue-100 text-blue-700",
    },
    {
      label: "Fair, Exhibition & Performance",
      color: "bg-green-100 text-green-700",
    },
    { label: "Official Meeting", color: "bg-yellow-100 text-yellow-700" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Agenda</h3>

      <div className="space-y-2">
        {agendaItems.map((a, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm font-medium ${a.color}`}
          >
            {a.label}
          </div>
        ))}
      </div>
    </div>
  );
}
