import { screen, setup } from '../test/utils'
import { TextField } from './text-field'

describe('Button', () => {
  it('should show the helper text', () => {
    setup(<TextField helperText="nome inválido" />)

    expect(screen.getByText('nome inválido')).toBeInTheDocument()
  })
})
