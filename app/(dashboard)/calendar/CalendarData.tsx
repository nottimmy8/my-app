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
