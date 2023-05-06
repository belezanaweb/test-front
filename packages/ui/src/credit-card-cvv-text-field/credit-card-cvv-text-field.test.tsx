import { useState } from 'react'
import { CreditCardCvvTextField } from './credit-card-cvv-text-field'
import { setup, screen, act } from '../test/utils'

describe('CreditCardCvvTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('')
      return (
        <CreditCardCvvTextField
          id="cvv"
          label="CVV"
          name="cvv"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.maskedValue)
          }}
        />
      )
    }

    const { user } = setup(<Component />)

    const fieldElement = screen.getByLabelText('CVV') as any

    await act(async () => {
      await user.type(fieldElement, '123')
    })

    expect(fieldElement.value).toBe('123')
  })
})
