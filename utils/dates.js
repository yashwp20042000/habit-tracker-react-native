export const getTodayDate = () => {
  return new Date().toISOString().split('T')[0];
};

export const getLast7Days = () => {
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    days.push(date.toISOString().split('T')[0]);
  }

  return days;
};