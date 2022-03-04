import { render } from '@testing-library/react';
import Button from '.';

test('Button should renders correctly', () => {
  const { debug } = render(<Button title="text">Olá</Button>);
  debug();
});
