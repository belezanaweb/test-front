import React from 'react';
import Text from '../components/Text';

export default {
  title: 'Text',
  component: Text,
};

export const Normal = () => <Text>Hello Button</Text>;

export const Size = () => <Text size={'40px'}>Hello Button</Text>;

export const Bold = () => (
  <Text bold size={'40px'}>
    Hello Text
  </Text>
);

export const Color = () => (
  <Text color="grey" size={'40px'}>
    Hello Text
  </Text>
);

export const Uppercase = () => (
  <Text uppercase color="grey" size={'40px'}>
    Hello Text
  </Text>
);

export const Center = () => (
  <Text center size={'40px'}>
    Hello Text
  </Text>
);
