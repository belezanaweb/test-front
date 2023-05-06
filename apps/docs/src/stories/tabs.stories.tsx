import type { Meta, StoryObj } from '@storybook/react'

import { Tabs, useTabs } from 'ui'

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  tags: ['autodocs']
} satisfies Meta<(typeof Tabs)['Root']>

export default meta
type Story = StoryObj<typeof meta>

const DefaultComponent = () => {
  const tabs = useTabs({ tabKey: 'tab1' })

  return (
    <Tabs.Root {...tabs}>
      <Tabs.List>
        <Tabs.Trigger tabKey="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger tabKey="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger tabKey="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content tabKey="tab1">content 1</Tabs.Content>
      <Tabs.Content tabKey="tab2">content 2</Tabs.Content>
      <Tabs.Content tabKey="tab3">content 3</Tabs.Content>
    </Tabs.Root>
  )
}

export const Default: Story = {
  args: {
    children: '',
    tabKey: ''
  },
  render: () => <DefaultComponent />
}

const DisabledComponent = () => {
  const tabs = useTabs({ tabKey: 'tab1' })

  return (
    <Tabs.Root {...tabs}>
      <Tabs.List>
        <Tabs.Trigger tabKey="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger tabKey="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger tabKey="tab3" isDisabled>
          Tab 3
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content tabKey="tab1">content 1</Tabs.Content>
      <Tabs.Content tabKey="tab2">content 2</Tabs.Content>
      <Tabs.Content tabKey="tab3">content 3</Tabs.Content>
    </Tabs.Root>
  )
}

export const Disabled: Story = {
  args: {
    children: '',
    tabKey: ''
  },
  render: () => <DisabledComponent />
}
