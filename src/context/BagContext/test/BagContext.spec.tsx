import React, { useEffect } from 'react';
import { act, render, screen } from '@testing-library/react';
import { responseBag, payment } from '_test/mock';
import { useBagContext } from '../hooks/useBagContext';
import BagContextProvider from '..';

const MakeSut: React.FC<{ spySetMyState: jest.Mock<any, any> }> = ({ spySetMyState }): React.ReactElement => {
  const { state, actions } = useBagContext();

  useEffect(() => {
    spySetMyState(state);
  }, [state]);

  const handleBag = () => actions.setResponseBagData(responseBag);
  const handlePayment = () => actions.setPaymentData(payment);

  return (
    <>
      <button data-testid='context-update-bag' onClick={handleBag}>update bag</button>
      <button data-testid='context-update-payment' onClick={handlePayment}>update payment</button>
    </>
  );
};

describe('Context :: BagContext', () => {
  it('should create context and set bag data', async () => {
    const spySetMyState = jest.fn();

    render(
      <BagContextProvider>
        <MakeSut spySetMyState={spySetMyState} />
      </BagContextProvider>
    );
    const button = screen.getByTestId('context-update-bag');
    await act(async () => {
      button.click();
    });

    expect(spySetMyState).lastCalledWith({ payment: {}, responseBag });
  });

  it('should create context and set payment data', async () => {
    const spySetMyState = jest.fn();

    render(
      <BagContextProvider>
        <MakeSut spySetMyState={spySetMyState} />
      </BagContextProvider>
    );
    const button = screen.getByTestId('context-update-payment');
    await act(async () => {
      button.click();
    });

    expect(spySetMyState).lastCalledWith({ payment, responseBag: {} });
  });
});
