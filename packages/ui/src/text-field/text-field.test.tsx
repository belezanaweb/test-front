import { screen, setup } from '../test/utils'
import { TextField } from './text-field'

describe('Button', () => {
  it('should show the helper text', () => {
    setup(<TextField helperText="nome inválido" />)

    expect(screen.getByText('nome inválido')).toBeInTheDocument()
  })

  it('should show a label', () => {
    setup(<TextField id="nome" label='Nome' />)

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
  })
})
