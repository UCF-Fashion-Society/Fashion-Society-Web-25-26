import { useEffect, useState } from "react";
import { motion } from "motion/react";

/*
 * This is a temporary page to setup a google calendar request and display event data.
 * Its currently using my personal google calendar info for testing purposes but is ready to 
 * use the FS info then we can proceed with making it look good and specifying how to display
 * the events
*/

/*
 * Refactor coming soon
 * - Move API request to a separate hook
 * - Calendar component
 * - Upcoming Meetings Component
*/

// Define type for TypeScript
// https://developers.google.com/workspace/calendar/api/v3/reference/events
type GoogleCalenderEvent = {
  id: string;
  summary?: string;
  description?: string;
  start?: { dateTime?: string; date?: string };
  end?: { dateTime?: string; date?: string };
};

export default function Calendar() {
  const [events, setEvents] = useState<GoogleCalenderEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<GoogleCalenderEvent | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | null>(null);


  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  // Wrap function in useEffect since we're rendering on page load
  useEffect(() => {
    async function loadEvents() {
      try {
        setError(null);

        const url =
          // Params list: https://developers.google.com/workspace/calendar/api/v3/reference/events/list
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events` +
          `?key=${apiKey}` +
          `&singleEvents=true` +
          `&orderBy=startTime` +
          `&timeMin=${new Date().toISOString()}` +
          `&maxResults=50`

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Google Calendar API error: ${response.status}`);
        }

        const data = await response.json();

        // Check
        console.log("This is the data");
        console.log(data);

        // Put items array from data into Events, if it doesn't exist leave it empty
        setEvents(data.items ?? []);

      } catch (error: any) {
        setError(error.message ?? "Failed to load events");
        setEvents([]);
      }
    }

    loadEvents();
  }, [apiKey, calendarId]);

  // Format time to XX:XX AM/PM format
  const formatTime = (dateTimeString?: string) => {
    if (!dateTimeString) return "";
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes} ${ampm}`;
  };

  // Format date to "Day, Mon ##" format
  const formatDate = (dateTimeString?: string) => {
    if (!dateTimeString) return "";
    const date = new Date(dateTimeString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    const dayOfMonth = date.getDate();
    return `${dayName}, ${monthName} ${dayOfMonth}`;
  };

  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get first day of the month and how many days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Create array of all days in the month
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Group events by day of month
  const eventsByDay: { [key: number]: GoogleCalenderEvent[] } = {};
  events.forEach((event) => {
    const dateStr = event.start?.dateTime || event.start?.date;
    if (dateStr) {
      const eventDate = new Date(dateStr);
      if (eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear) {
        const day = eventDate.getDate();
        if (!eventsByDay[day]) {
          eventsByDay[day] = [];
        }
        eventsByDay[day].push(event);
      }
    }
  });

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Find next meetings for each type
  const now = new Date();

  const nextGBM = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "GBM" && eventDate >= now;
  });
  const nextStylingMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Styling Meeting" && eventDate >= now;
  });
  const nextModelingMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Modeling Meeting" && eventDate >= now;
  });
  const nextPhotographyMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Photography Meeting" && eventDate >= now;
  });
  const nextWebDesignMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Web Design Meeting" && eventDate >= now;
  });
  const nextDesignMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Design Meeting" && eventDate >= now;
  });
  const nextProductionMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Production Meeting" && eventDate >= now;
  });
  const nextSocialMediaMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Social Media Meeting" && eventDate >= now;
  });
  const nextZineMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Zine Meeting" && eventDate >= now;
  });
  const nextBeautyMeeting = events.find(event => {
    const eventDate = new Date(event.start?.dateTime || event.start?.date || '');
    return event.summary === "Beauty Meeting" && eventDate >= now;
  });




  return (
    <div className="min-h-screen p-6" >

      <div className="max-w-6xl mx-auto">
        {/* Fashion Society Header */}
        <div className="mb-8 text-center relative animate-in">
          <div className="absolute top-0 left-0 right-0 h-px bg-[#373333]"></div>

          <div className="py-8">
            <div className="text-5xl font-bold text-[#2C2C2C]">
              UPCOMING EVENTS
            </div>
          </div>
        </div>

        {error && (
          <div className=" mb-6 p-4 text-sm bg-red-50 text-red-800">
            <div className="font-semibold mb-1">Error</div>
            {error}
          </div>
        )}

        {/* Main calendar section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Calendar grid - main column */}
          <div className="lg:col-span-2">
            <div className="border p-[23px] bg-white">
              <div className="mb-4 text-center">
                <div className="text-3xl font-bold text-[#2C2C2C]">
                  {monthNames[currentMonth]}
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2 p-2 bg-[#2C2C2C]">
                {dayNames.map((day, index) => (
                  <div
                    key={day}
                    className={`p-2 text-center font-semibold text-white text-sm ${index === 0 || index === 6 ? "text-[1A1A1A]" : "text-[#2C2C2C]"}`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2 p-3 bg-[#F5F5F5]">
                {calendarDays.map((day, index) => {
                  const dayEvents = day ? eventsByDay[day] || [] : [];
                  const isToday = day === currentDate.getDate();

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
                      className={`aspect-square p-2 flex-col ${day ? (isToday ? "bg-[#FFE5D4] border-2 border-[#C9A98A]" : "bg-[#FFF] border border-[#E0E0E0]") : "bg-[#E8E8E8]"} relative hover:transition-all hover:shadow-md hover:duration-300 overflow-hidden`}
                    >
                      {day && (
                        <>
                          <div className={`text-base font-semibold mb-1 flex-shrink-0 ${isToday ? "text-[#8B6F47]" : "text-[#2C2C2C]"}`}>
                            {day}
                          </div>
                          <div className="space-y-0.5 text-xs overflow-hidden flex-1 min-h-0">
                            {dayEvents.map((event) => (
                              <div
                                key={event.id}
                                className="px-1.5 py-1 bg-[#F8F0E8] border border-[#D4C4B0] text-[#2C2C2C] text-[9px] font-medium truncate cursor-pointer hover:opacity-80 transition-opacity"
                                title={event.summary}
                                onClick={(e) => {
                                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                  setSelectedEvent(event);
                                  setModalPosition({ x: rect.left - 310, y: rect.top - 5 });
                                }}
                              >
                                {event.start?.dateTime && <span className="font-semibold">{formatTime(event.start.dateTime)} </span>}
                                {event.summary}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Upcoming Meetings */}
          <div className="space-y-3">


            {/* GBM */}
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} // maybe border-[#C9A98A]
              className="border  p-4 bg-[#F5F5F5] min-h-32 hover:shadow-md hover:transition-all hover:duration-300">
              <div className="text-xs text-[#2C2C2C] font-semibold mb-2 tracking-wider">
                GENERAL BODY MEETING
              </div>
              {nextGBM ? (
                <div>
                  <div className="text-2xl text-[#2C2C2C] font-bold">
                    {formatTime(nextGBM.start?.dateTime || '')} - {formatTime(nextGBM.end?.dateTime || '')}
                  </div>
                  <div className="text-sm mt-1 text-[#666666]">
                    {formatDate(nextGBM.start?.dateTime || '')}
                  </div>
                </div>
              ) : (
                <div className=" text-gray-400">
                  <h1 className="text-2xl font-bold">
                    Loading..
                  </h1>
                  <h2 className="text-sm mt-1">
                    Please wait
                  </h2>
                </div>
              )}
            </motion.div>

            {/* Committee Meetings */}
            <div className="space-y-2">

              {/* Modeling Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF8F8] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#CC6B8E]">
                  MODELING
                </div>
                {nextModelingMeeting ? (
                  <div className="text-sm font-bold text-[#CC6B8E]">
                    {formatDate(nextModelingMeeting.start?.dateTime || '')} • {formatTime(nextModelingMeeting.start?.dateTime || '')} - {formatTime(nextModelingMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>


              {/* Styling Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF8F8] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#CC6B8E]">
                  STYLING
                </div>
                {nextStylingMeeting ? (
                  <div className="text-sm font-bold text-[#CC6B8E]">
                    {formatDate(nextStylingMeeting.start?.dateTime || '')} • {formatTime(nextStylingMeeting.start?.dateTime || '')} - {formatTime(nextStylingMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Beauty Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF8F8] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs text-[#CC6B8E] font-semibold tracking-wider">
                  BEAUTY
                </div>
                {nextBeautyMeeting ? (
                  <div className="text-sm font-bold text-[#CC6B8E]">
                    {formatDate(nextBeautyMeeting.start?.dateTime || '')} • {formatTime(nextBeautyMeeting.start?.dateTime || '')} - {formatTime(nextBeautyMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Social Media Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF5F0] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#8B6F47]">
                  SOCIAL MEDIA
                </div>
                {nextSocialMediaMeeting ? (
                  <div className="text-sm font-bold text-[#8B6F47]">
                    {formatDate(nextSocialMediaMeeting.start?.dateTime || '')} • {formatTime(nextSocialMediaMeeting.start?.dateTime || '')} - {formatTime(nextSocialMediaMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Production Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF5F0] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#8B6F47]">
                  PRODUCTION
                </div>
                {nextProductionMeeting ? (
                  <div className="text-sm font-bold text-[#8B6F47]">
                    {formatDate(nextProductionMeeting.start?.dateTime || '')} • {formatTime(nextProductionMeeting.start?.dateTime || '')} - {formatTime(nextProductionMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Zine Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#FFF5F0] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#8B6F47]">
                  ZINE
                </div>
                {nextZineMeeting ? (
                  <div className="text-sm font-bold text-[#A64D79]">
                    {formatDate(nextZineMeeting.start?.dateTime || '')} • {formatTime(nextZineMeeting.start?.dateTime || '')} - {formatTime(nextZineMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Design Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#F0F8FF]  hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs font-semibold tracking-wider text-[#4A5D7C]">
                  DESIGN
                </div>
                {nextDesignMeeting ? (
                  <div className="text-sm font-bold text-[#8B4F6D]">
                    {formatDate(nextDesignMeeting.start?.dateTime || '')} • {formatTime(nextDesignMeeting.start?.dateTime || '')} - {formatTime(nextDesignMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>


              {/* Photography Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#F0F8FF] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs text-[#4A5D7C] font-semibold tracking-wider">
                  PHOTOGRAPHY
                </div>
                {nextPhotographyMeeting ? (
                  <div className="text-sm font-bold text-[#4A5D7C]">
                    {formatDate(nextPhotographyMeeting.start?.dateTime || '')} • {formatTime(nextPhotographyMeeting.start?.dateTime || '')} - {formatTime(nextPhotographyMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>

              {/* Web Design Meeting */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                className="border p-3 flex items-center justify-between bg-[#F0F8FF] hover:shadow-md hover:transition-all hover:duration-300">
                <div className="text-xs text-[#4A5D7C] font-semibold tracking-wider">
                  WEB DESIGN
                </div>
                {nextWebDesignMeeting ? (
                  <div className="text-sm font-bold text-[#4A5D7C]">
                    {formatDate(nextWebDesignMeeting.start?.dateTime || '')} • {formatTime(nextWebDesignMeeting.start?.dateTime || '')} - {formatTime(nextWebDesignMeeting.end?.dateTime || '')}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">TBD</div>
                )}
              </motion.div>


            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && modalPosition && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setSelectedEvent(null);
              setModalPosition(null);
            }}
          />
          <div
            className={`fixed rounded-md border border-[#D4C4B0] shadow-2xl p-6 z-50 min-w-[300px] max-w-[300px] bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-md `}
            style={{
              // backgroundColor: '#F8F0E8',
              top: `${modalPosition.y}px`,
              left: `${modalPosition.x}px`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-2xl font-bold flex-1 text-[#2C2C2C]">
                {selectedEvent.summary}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold tracking-wider mb-1 text-[#2C2C2C]/80">
                  {formatDate(selectedEvent.start?.dateTime || selectedEvent.start?.date)}  •  {selectedEvent.start?.dateTime && selectedEvent.end?.dateTime ? formatTime(selectedEvent.start.dateTime) + " - " + formatTime(selectedEvent.end.dateTime) : 'All Day'}
                </div>
              </div>

              {selectedEvent.description && (
                <div>

                  <div className="text-sm text-[#2C2C2C]" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {selectedEvent.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
