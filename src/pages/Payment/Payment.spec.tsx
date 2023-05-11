import React from 'react';
import { act, screen, fireEvent } from '@testing-library/react';
import { customRender } from '_test/render';
import Context from '_context/BagContext/context';
import { useBagContext } from '_context/BagContext/hooks/useBagContext';
import Payment from '.';

const state = {
  payment: {},
  responseBag: {},
};

jest.mock('_components/Resume', () => ({
  default: ({ action }: { action: React.ReactElement}) => <div>{action}</div>,
}));

jest.mock('_context/BagContext/hooks/useBagContext', () => ({
  useBagContext: jest.fn().mockImplementation(() => ({
    state,
    actions: {
      setPaymentData: jest.fn,
      setResponseBagData: jest.fn,
    },
  })),
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
    <Payment />
  </Context.Provider>
);

describe('Pages :: Payment', () => {
  it('should be submit invalid form', async () => {
    customRender(<MakeSut />);

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    const errors = screen.getAllByTestId('form-field-error');
    expect(errors.length).toBe(4);
  });

  it('should be submit valid form', async () => {
    const setPaymentData = jest.fn();
    const setResponseBagData = jest.fn();

    const mockedBagContext = jest.mocked(useBagContext, true);
    mockedBagContext.mockImplementation(() => ({
      state,
      actions: {
        setPaymentData,
        setResponseBagData,
      },
    }));

    customRender(<MakeSut />);

    const inputName = screen.getByPlaceholderText('Nome impresso no cartão');
    fireEvent.change(inputName, { target: { value: 'Jhonn' } });

    const inputNumber = screen.getByPlaceholderText('000 000 000 000');
    fireEvent.change(inputNumber, { target: { value: '888 888 888 888' } });

    const inputValid = screen.getByPlaceholderText('MM/AAAA');
    fireEvent.change(inputValid, { target: { value: '88/8888' } });

    const inputCvv = screen.getByPlaceholderText('000');
    fireEvent.change(inputCvv, { target: { value: '888' } });

    const button = screen.getByRole('button');
    await act(async () => {
      button.click();
    });

    expect(setPaymentData).toBeCalledTimes(1);
  });
});
