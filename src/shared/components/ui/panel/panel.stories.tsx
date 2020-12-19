import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import { IPanelProps } from './panel.interface';
import { Panel } from './panel.component';

import Title from '../title';
import Card from '../card';

import utils from '../../../utils';

export default {
  title: 'Panel',
  component: Panel,
};

const Template: Story<IPanelProps> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: <Title>Test</Title>,
  children: (
    <>
      <Card
        title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
        price={utils.format.currency.toBRL(225.9)}
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      />
      <Card
        title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
        price={utils.format.currency.toBRL(225.9)}
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      />
      <Card
        title="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g"
        price={utils.format.currency.toBRL(225.9)}
        image="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      />
    </>
  ),
};
