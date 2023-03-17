const isValidDate = (input: string): boolean => {
  const [monthString, yearString] = input.split('/');

  const month = parseInt(monthString);
  const year = parseInt(yearString);

  if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 0 || year > 99) {
    return false;
  }

  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (year > currentYear || (year === currentYear && month >= currentMonth)) {
    return true;
  } else {
    return false;
  }
}

export default isValidDate;
