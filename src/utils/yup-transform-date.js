export const getLastDay = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const formatNumberToString = (number) => (number < 10 ? '0' + number : number);

export default (value, rawValue) => {
  if (!(rawValue instanceof Date) && rawValue.length > 2) {
    const defaultDate = new Date();
    const defaultYear = defaultDate.getFullYear();

    const [month, year] = rawValue.split('/');

    const currentMonth = parseInt(month - 1, 10);
    const currentYear = year || defaultYear;
    const lastDay = getLastDay(new Date(`${currentYear}-${formatNumberToString(currentMonth)}`));

    const expirationDate = new Date(
      `${currentYear}-${formatNumberToString(currentMonth + 1)}-${lastDay}`
    );

    return expirationDate;
  } else {
    return rawValue;
  }
};
