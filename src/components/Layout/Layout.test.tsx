import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Card from '../Card';
import Text from '../Text';

import Layout from './Layout';

describe('<Layout />', () => {
  it('should render Layout', () => {
    const { container } = provider((
      <BrowserRouter>
        <Layout>
          <Card css={{
            alignItems: 'center',
            marginTop: '30px',
            height: '360px',
            justifyContent: 'center',
          }}>
            <Text>Resize Window</Text>
          </Card>
        </Layout>
      </BrowserRouter>
    ), render);

    expect(container).toMatchSnapshot();
  });
});
