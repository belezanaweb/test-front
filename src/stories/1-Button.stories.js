import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Clicked = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Disabled = () => <Button disabled>Hello Button</Button>;

export const FullWidth = () => <Button fullWidth>Hello Button</Button>;

export const Center = () => <Button center>Hello Button</Button>;
