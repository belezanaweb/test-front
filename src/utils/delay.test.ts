import '@testing-library/jest-dom/extend-expect';

import delay from './delay';

describe('delay model', () => {
  it('should have async/wait support.', async () => {
    const before = new Date().getTime();

    await delay(200);

    expect(new Date().getTime()).toBeGreaterThanOrEqual(before + 200);
  });
});
