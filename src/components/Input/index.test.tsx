import { render } from '@testing-library/react';
import { Form } from '@unform/web';
import React from 'react';
import Input from '.';

const Wrapper: React.FC = ({ children }) => (
  <Form onSubmit={() => {}}>{children}</Form>
);

describe('<Input />', () => {
  it('should be able to render correctly', () => {
    // Arrange
    const { baseElement } = render(
      <Wrapper>
        <Input name="name" />
      </Wrapper>,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly within label', () => {
    // Arrange
    const { baseElement } = render(
      <Wrapper>
        <Input name="name" label="Name:" />
      </Wrapper>,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });

  it('should be able to render correctly when disabled', () => {
    // Arrange
    const { baseElement } = render(
      <Wrapper>
        <Input name="name" disabled />
      </Wrapper>,
    );

    // Assert
    expect(baseElement).toMatchSnapshot();
  });
});
