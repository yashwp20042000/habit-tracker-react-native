import { getTodayDate } from './dates';

export const calculateStreak = (history) => {
  let streak = 0;

  const currentDate = new Date(getTodayDate());

  while (true) {
    const formatted = currentDate.toISOString().split('T')[0];

    if (history[formatted]) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};