"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <div className="h-[98%]">
      {isMounted && (
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          views={["work_week", "day"]}
          view={view}
          onView={handleOnChangeView}
          min={new Date(2025, 1, 0, 8, 0, 0)}
          max={new Date(2025, 1, 0, 17, 0, 0)}
        />
      )}
    </div>
  );
};

export default BigCalendar;
