import yupTransformDate from '~/utils/yup-transform-date';

describe('YupTransformDate Util', () => {
  it('should return a valid date with the last day of the month when only the month and year pass', () => {
    const currentDate = '03/2021';
    const marchMonthIndex = 2;
    const fullYear = 2021;
    const lastDayOfMarch = 31;

    const returnedDate = yupTransformDate(new Date(), currentDate);

    expect(returnedDate.getFullYear()).toEqual(fullYear);
    expect(returnedDate.getMonth()).toEqual(marchMonthIndex);
    expect(returnedDate.getUTCDate()).toEqual(lastDayOfMarch);
  });
});
