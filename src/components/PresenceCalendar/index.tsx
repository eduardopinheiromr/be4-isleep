import React, { useEffect, useState } from "react";
import { getCurrentCalendar } from "../../utils/getCurrentCalendar";
import WeekDays from "./WeekDays";
import MonthDisplay from "./MonthDisplay";
import AllDays from "./AllDays";

export default function PresenceCalendar() {
  const [calendar, setCalendar] = useState<TCalendar | undefined>(undefined);

  useEffect(() => {
    getCurrentCalendar().then(calendar => {
      setCalendar(calendar);
    });
  }, []);

  if (!calendar) return <></>;

  return (
    <>
      <MonthDisplay calendar={calendar} />
      <WeekDays calendar={calendar} />
      <AllDays calendar={calendar} />
    </>
  );
}
