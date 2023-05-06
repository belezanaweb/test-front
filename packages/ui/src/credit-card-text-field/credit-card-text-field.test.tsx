import { useState } from 'react'
import { CreditCardTextField } from './credit-card-text-field'
import { setup, screen, act } from '../test/utils'

describe('CreditCardTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('')
      return (
        <>
          <label htmlFor="creditCard">Credit Card</label>
          <CreditCardTextField
            id="creditCard"
            name="creditCardNumber"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.maskedValue)
            }}
          />
        </>
      )
    }

    const { user } = setup(<Component />)

    const fieldElement = screen.getByLabelText('Credit Card') as any

    await act(async () => {
      await user.type(fieldElement, '1111111111111111')
    })

    expect(fieldElement.value).toBe('1111 1111 1111 1111')
  })
})
