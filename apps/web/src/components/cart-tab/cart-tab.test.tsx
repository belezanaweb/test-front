import { screen, setup, waitForElementToBeRemoved, wrapper } from '@/test/utils'
import { CartTab } from '.'

describe('CartTab', () => {
  it('should render properly', async () => {
    setup(<CartTab />, { wrapper })

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    expect(screen.getByText('Loreal')).toBeInTheDocument()
    expect(screen.getByText('R$ 243,90')).toBeInTheDocument()
    expect(screen.getByText('R$ 225,90')).toBeInTheDocument()

    expect(screen.getByText('Carolina')).toBeInTheDocument()
    expect(screen.getByText('R$ 299,00')).toBeInTheDocument()
  })
})
