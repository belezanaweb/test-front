import React from 'react';
import { act, screen } from '@testing-library/react';
import Context from '_context/BagContext/context';
import { customRender } from '_test/render';
import Confirmation from '.';

jest.mock('_components/Card', () => ({
  default: () => <span>card</span>,
}));
jest.mock('_components/Resume', () => ({
  default: () => <span>resume</span>,
}));
jest.mock('_components/Typography', () => ({
  default: () => <span>typography</span>,
}));

const MakeSut: React.FC<React.PropsWithChildren> = (): React.ReactElement => (
  <Context.Provider value={{
    state: {
      payment: {},
      responseBag: {},
    },
    actions: {
      setPaymentData: () => {},
      setResponseBagData: () => {},
    },
  }}>
    <Confirmation />
  </Context.Provider>
);

describe('Pages :: Confirmation', () => {
  it('should be render confirmation page', async () => {
    await act(async () => await customRender(<MakeSut />));

    const section = screen.getAllByTestId('component-section');
    expect(section.length).toBe(2);

    const resume = screen.getByText(/resume/i);
    expect(resume).toBeInTheDocument();
  });
});
