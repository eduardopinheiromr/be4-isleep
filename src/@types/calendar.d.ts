type TCalendar = {
  year: number;
  month: string;
  days: TDay[];
};

type TDay = {
  day: Date;
  history: any[];
};
