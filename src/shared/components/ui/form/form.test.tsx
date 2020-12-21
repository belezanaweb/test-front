import React from 'react';
import { render, screen, fireEvent, waitForElement } from '../../../../../config/test-utils';

import Form, { FormField, FormLabel, FormGroup } from './index';

describe('<Form />', () => {
  it('should render Form component with <form> tag', () => {
    render(<Form onSubmit={() => {}}>From</Form>, {});
    expect(screen.getByRole('form'));
  })

  it('should render Form component with default props and match snapshot', () => {
    const { container } = render(<Form onSubmit={() => {}}>From</Form>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('<FormField />', () => {
  it('should render FormField component with <input> tag', () => {
    render(<FormField type="text" />, {});
    expect(screen.findByRole('input'));
  })

  it('should return a value after the change event', () => {
    render(<FormField type="text" role="textbox" />, {});

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '23' } });

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('23');
  })

  it('should render FormField component with default props and match snapshot', () => {
    const { container } = render(<FormField type="text" />, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('<FormGroup />', () => {
  it('should render FormGroup component with <p> tag', () => {
    render(<FormGroup>Group</FormGroup>, {});
    expect(screen.findByRole('p'));
  })

  it('should render FormGroup component with default props and match snapshot', () => {
    const { container } = render(<FormGroup>Group</FormGroup>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})

describe('<FormLabel />', () => {
  it('should render FormLabel component with <label> tag', () => {
    render(<FormLabel>Label</FormLabel>, {});
    expect(screen.findByRole('label'));
  })

  it('should render FormLabel component with default props and match snapshot', () => {
    const { container } = render(<FormLabel>Label</FormLabel>, {});
    expect(container.firstChild).toMatchSnapshot();
  })
})
