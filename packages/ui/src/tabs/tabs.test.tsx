import { Tabs, useTabs } from '.'
import { setup, screen } from '../test/utils'

describe('Tabs', () => {
  it('should render tabs content properly', async () => {
    function Component() {
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

    const { user } = setup(<Component />)

    await user.click(screen.getByRole('button', { name: 'Tab 2' }))

    expect(screen.getByText('content 2')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Tab 3' }))

    expect(screen.getByText('content 3')).toBeInTheDocument()
  })

  it('should not be able to change tab when it is disabled', async () => {
    function Component() {
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

    const { user } = setup(<Component />)

    await user.click(screen.getByRole('button', { name: 'Tab 2' }))

    expect(screen.getByText('content 2')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Tab 3' }))

    expect(screen.queryByText('content 3')).not.toBeInTheDocument()
  })
})
