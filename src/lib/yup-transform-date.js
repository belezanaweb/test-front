const getLastDay = date => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export default (value, rawValue) => {
  if (!(rawValue instanceof Date) && rawValue.length > 2) {
    const defaultDate = new Date();
    const defaultMonth = defaultDate.getMonth();
    const defaultYear = defaultDate.getFullYear();

    const [month, year] = rawValue.split('/');

    const currentMonth = month ? parseInt(month, 10) - 1 : defaultMonth;
    const currentYear = year || defaultYear;
    const lastDay = getLastDay(new Date(`${currentYear}-${currentMonth}`));

    const expirationDate = new Date(`${currentYear}-${currentMonth}-${lastDay}`);

    return expirationDate;
  } else {
    return rawValue;
  }
};
