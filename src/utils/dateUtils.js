import moment from "moment";

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const getDisplayedMonth = (date) => {
  const weekStart = getWeekStartDate(date);
  const weekEnd = moment(date).add(6, "days").toDate();
  const startMonth = moment(weekStart).format("MM");
  const startMonthName = moment(weekStart).format("MMM");
  const endMonth = moment(weekEnd).format("MM");
  const endtMonthName = moment(weekEnd).format("MMM");
  const startYear = moment(weekStart).format("YYYY");
  const endYear = moment(weekEnd).format("YYYY");

  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
    return `${startMonthName} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
    ? `${startMonthName} - ${endtMonthName} ${startYear}`
    : `${startMonthName} ${startYear} - ${endtMonthName} ${endYear}`;
};

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
