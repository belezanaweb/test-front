import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

export default {
  title: 'Input',
  component: Input,
};

export const Change = () => <Input onChange={action('typing')} />;

export const Disabled = () => <Input disabled />;

export const Mask = () => (
  <Input onChange={action('typing')} mask="99/99/9999" maskChar="_" />
);

export const Placeholder = () => (
  <Input onChange={action('typing')} placeholder="Placeholder" />
);
