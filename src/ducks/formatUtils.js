import {DateTime, Interval} from 'luxon';

export const formatTimeStamp = (timestamp) => {
    const past = DateTime.fromMillis(timestamp * 1000);
    const now = DateTime.local();
    const interval = Interval.fromDateTimes(past, now);
    const duration = interval.toDuration(['years', 'hours', 'days','minutes','seconds', 'months']);
    const {years, months, days, hours, minutes, seconds} = duration.values;

    if(years > 0) {
      return years > 1 ? `${years} yrs ago` : `${years} yr ago`;
    }
    if(months > 0) {
      return months > 1 ? `${months} months ago` : `${months} month ago`;
    }
    if(days > 0) {
      return days > 1 ? `${days} days ago` : `${days} day ago`;
    }
    if(hours > 0) {
      return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`;
    }
    if(minutes > 0) {
      return minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`;
    }
    if(seconds > 0) {
      if(seconds < 1) {
        return 'just now';
      }
      const rounded = Math.round(seconds);
      return rounded > 1 ? `${rounded} seconds ago` : `${rounded} second ago`;
    }
}
