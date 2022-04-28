import React, { useEffect, useState } from "react";
import { getCurrentCalendar } from "../../utils/getCurrentCalendar";
import WeekDays from "./WeekDays";
import MonthDisplay from "./MonthDisplay";
import AllDays from "./AllDays";
import { useCalendarStore } from "../../stores/calendar";

export default function PresenceCalendar() {
  const { calendar } = useCalendarStore();

  if (!calendar) return <></>;

  return (
    <>
      <MonthDisplay calendar={calendar} />
      <WeekDays calendar={calendar} />
      <AllDays calendar={calendar} />
    </>
  );
}
