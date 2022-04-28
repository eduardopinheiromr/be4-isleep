type TCalendar = {
  year: number;
  month: string;
  days: TDay[];
};

type TDay = {
  day: Date;
  history: THistory;
};

type THistory = {
  missions: TMission[];
  about: string;
};
