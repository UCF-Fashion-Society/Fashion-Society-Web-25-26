import { useEffect, useState } from "react";

type GoogleCalenderEvent = {
  id: string;
  summary?: string;
  description?: string;
  start?: { dateTime?: string; date?: string };
};

export default function Calendar() {
  const [events, setEvents] = useState<GoogleCalenderEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  useEffect(() => {
    async function loadEvents() {
      try {
        setError(null);

        const url =
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events` +
          `?key=${apiKey}` +
          `&singleEvents=true` +
          `&orderBy=startTime` +
          `&timeMin=${new Date().toISOString()}` +
          `&maxResults=10`

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Google Calendar API error: ${response.status}`);
        }

        const data = await response.json();

        console.log("This is the data");
        console.log(data);

        setEvents(data.items ?? []);

      } catch (error : any) {
        setError(error.message ?? "Failed to load events");
        setEvents([]);
      }
    }

    loadEvents();
  }, [apiKey, calendarId]);

  return (
    <div>
      <h1>Upcoming Events</h1>

      {error && <p className="text-red-800">{error}</p>}

      <ul className="border p-2 list-disc">
        {events.map((event) => (
          <li key={event.id}>
            {event.summary ?? "No title"}
            {event.description}
            {event.start?.dateTime ?? event.start?.date ?? ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
