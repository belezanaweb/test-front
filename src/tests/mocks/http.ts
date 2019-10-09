import { http } from 'exredux';
import MockAdapter from 'axios-mock-adapter';
import { AxiosRequestConfig } from 'axios';
import mockProductList from './productList';

const mock = new MockAdapter(http);

export function mockGet(url: string, response: (config: AxiosRequestConfig) => any) {
  mock.onGet(url).reply(config => {
    return [200, response(config)];
  });
}

const API_URL = process.env.API_URL;

mockGet(`${API_URL}/v2/5b15c4923100004a006f3c07`, () => mockProductList);
