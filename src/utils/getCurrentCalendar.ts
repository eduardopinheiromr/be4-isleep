import { getDaysInMonthUTC } from "./calendar";

export const getCurrentCalendar = () => {
  const now = new Date();
  const currentMonth = now.toLocaleString("pt-BR", { month: "long" });
  const monthString = now.toLocaleString("pt-BR", { month: "long" });
  const calendar = getDaysInMonthUTC(now.getMonth(), now.getFullYear());

  return { now, currentMonth, monthString, calendar };
};
