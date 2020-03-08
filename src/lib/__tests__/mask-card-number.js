import maskCardNumber from '../mask-card-number';

describe('maskCardNumber', () => {
  it('cannot should mask only the last group', () => {
    expect(maskCardNumber('2222.2222.2222.2222')).toEqual('****.****.****.2222');
  });
});
