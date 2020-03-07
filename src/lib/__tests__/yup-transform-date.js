import yupTransformDate from '../yup-transform-date';

describe('yupTransformDate', () => {
  it('should return a valid date with current day', () => {
    expect(yupTransformDate(undefined, '12/2021').getDate()).toEqual(new Date().getDate());
  });

  it('should return a valid date when the date string has less than 7 characters', () => {
    expect(yupTransformDate(undefined, '22').getDate()).toEqual(new Date().getDate());
  });
});
