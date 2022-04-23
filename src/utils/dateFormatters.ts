import moment from "moment";

export const formatWeekDay = (date: Date): string => {
  return moment(date).format("ddd");
};

export const formatMonthName = (date: Date): string => {
  return moment(date).format("MMMM");
};

export const formatDay = (date: Date): string => {
  return moment(date).format("D");
};
