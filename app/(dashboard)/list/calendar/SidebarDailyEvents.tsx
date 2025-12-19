import { CalendarEvents } from "./CalendarData";

export default function SidebarDailyEvents() {
  const todayEvents = CalendarEvents.filter(
    (e) => e.start.toDateString() === new Date(2030, 4, 8).toDateString()
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">May 8, 2030</h3>

      <div className="space-y-3">
        {todayEvents.map((event) => (
          <div
            key={event.id}
            className="p-3 border rounded-xl shadow-sm flex justify-between"
          >
            <div>
              <h4 className="font-semibold text-sm">{event.title}</h4>
              <p className="text-xs text-gray-500">{event.category}</p>
            </div>
            <span className="text-xs font-medium">
              {event.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
