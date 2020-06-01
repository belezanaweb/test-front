import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme, { Theming } from '../../theme';

import Card from '../Card';
import Text from '../Text';

import Layout from './Layout';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    <BrowserRouter>
      {storyFn()}
    </BrowserRouter>
  </Theming>
);

export default {
  component: Layout,
  decorators: [Provider],
  title: 'Layout',
};

export const Default = () => (
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
);
