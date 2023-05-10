import Bag from '.';
import { screen, act } from '@testing-library/react';
import { customRender } from '_test/render';
import { mock } from '_test/mock';
import * as H from '_hooks/useFetchBag';

jest.mock('_components/Card');
jest.mock('_components/Resume');
jest.mock('_components/Typography');

describe('Pages :: Bag', () => {
  it('should be render loading page', async () => {
    jest.spyOn(H, 'useFetchBag').mockReturnValue({
      data: undefined,
      isLoading: true,
    } as any);

    await act(async () => await customRender(<Bag />));

    const typography = screen.getByText(/typography/i);
    expect(typography).toBeInTheDocument();

    const resume = screen.getByText(/resume/i);
    expect(resume).toBeInTheDocument();
  });

  it('should be render data page', async () => {
    jest.spyOn(H, 'useFetchBag').mockReturnValue({
      data: {
        data: mock,
      },
      isLoading: false,
    } as any);

    await act(async () => await customRender(<Bag />));

    const card = screen.getByText(/card/i);
    expect(card).toBeInTheDocument();

    const resume = screen.getByText(/resume/i);
    expect(resume).toBeInTheDocument();
  });
});
