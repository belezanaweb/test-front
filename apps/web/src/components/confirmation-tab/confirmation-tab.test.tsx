import { screen, setup, wrapper } from '@/test/utils'
import { ConfirmationTab } from '.'
import { PaymentTabFormProvider } from '../payment-tab'
import { Tabs } from 'ui'

describe('ConfirmationTab', () => {
  it('should render products properly', async () => {
    setup(
      <PaymentTabFormProvider>
        <Tabs.Root tabKey="confirmation" setTabKey={() => undefined}>
          <ConfirmationTab />
        </Tabs.Root>
      </PaymentTabFormProvider>,

      { wrapper }
    )

    expect(await screen.findByText('Loreal')).toBeInTheDocument()
    expect(screen.getByText('Carolina')).toBeInTheDocument()
  })
})
