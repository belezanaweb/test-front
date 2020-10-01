import axios from 'axios';

const API = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07';
it('async API call with Jest', async () => {
  const req = await axios.get(API);
  const underTest = req.data[0];
  expect(underTest.name).toBe('Leanne Graham');
});