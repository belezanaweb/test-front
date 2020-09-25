import maskCardNumber from '~/utils/mask-card-number';

describe('MaskCardNumber Util', () => {
  it('cannot should mask only the last group', () => {
    expect(maskCardNumber('2222.2222.2222.2222')).toEqual('****.****.****.2222');
  });
});
