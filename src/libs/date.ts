import { MONTHS, WEEKDAYS } from 'constants/date';

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export function convertDate(date: string) {
  const [weekday, fulldate, year] = new Date(date)
    .toLocaleDateString('en', options)
    .split(',');
  const [month, day] = fulldate.trim().split(' ');
  return `${WEEKDAYS[weekday]}, ${MONTHS[month]} ${day}, ${year}`;
}
