import React from 'react';
import Bag from '.';
import Context from '_context/BagContext/context';
import { screen, act } from '@testing-library/react';
import { customRender } from '_test/render';
import { responseBag } from '_test/mock';
import * as H from '_hooks/useFetchBag';

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
    <Bag />
  </Context.Provider>
);

describe('Pages :: Bag', () => {
  it('should be render loading page', async () => {
    jest.spyOn(H, 'useFetchBag').mockReturnValue({
      data: undefined,
      isLoading: true,
    } as any);

    await act(async () => await customRender(<MakeSut />));

    const typography = screen.getByText(/typography/i);
    expect(typography).toBeInTheDocument();

    const resume = screen.getByText(/resume/i);
    expect(resume).toBeInTheDocument();
  });

  it('should be render data page', async () => {
    jest.spyOn(H, 'useFetchBag').mockReturnValue({
      data: {
        data: responseBag,
      },
      isLoading: false,
    } as any);

    await act(async () => await customRender(<MakeSut />));

    const card = screen.getByText(/card/i);
    expect(card).toBeInTheDocument();

    const resume = screen.getByText(/resume/i);
    expect(resume).toBeInTheDocument();
  });
});
