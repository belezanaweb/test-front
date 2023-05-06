import { useState } from 'react'
import { CreditCardDueDateTextField } from './credit-card-due-date-text-field'
import { setup, screen, act } from '../test/utils'

describe('CreditCardDueDateTextField', () => {
  it('should render the masked value properly', async () => {
    function Component() {
      const [value, setValue] = useState('')
      return (
        <CreditCardDueDateTextField
          id="dueData"
          label="Due Date"
          name="dueData"
          value={value}
          onChange={(e: any) => {
            setValue(e.target.maskedValue)
          }}
        />
      )
    }

    const { user } = setup(<Component />)

    const fieldElement = screen.getByLabelText('Due Date') as any

    await act(async () => {
      await user.type(fieldElement, '1021')
    })

    expect(fieldElement.value).toBe('10/21')
  })
})
