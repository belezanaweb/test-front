import { ThemeProvider } from 'styled-components';
import { fireEvent, render,screen } from '@testing-library/react'
import Theme from '../../theme';

import { vi } from 'vitest'

const mockNavigateClick = vi.fn();
vi.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigateClick
    }
});

import CreditCardForm from '.'

describe('Credit Card Form component', () => {

    beforeEach(() => {
        mockNavigateClick.mockClear()
    })

    it('should render component', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 
        const form = container.querySelector("form");
        expect(form).toBeDefined();
    });
    
    it('should change to next page', async () => {
        const { container, getByText } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 

        const inputNumber = screen.getByLabelText("Número do cartão:");
        const inputName = screen.getByLabelText("Nome do Titular:");
        const inputDate = screen.getByLabelText("Validade (mês/ano):");
        const inputCCV = screen.getByLabelText("CVV:") ;

        fireEvent.change(inputNumber, {target: {value: '2222.2222.2222.2222'}});
        fireEvent.change(inputName, {target: {value: 'Jose Roberto da Silva'}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: '123'}})
        fireEvent.submit(container.querySelector("form") as Element);


        expect(mockNavigateClick).toHaveBeenCalledWith("/confirmation");
    });

    it('shouldn`t change page when number length minor then 16', async () => {
        const { getByLabelText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 
        
        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;
        
        fireEvent.change(inputNumber, {target: {value: ''}});
        fireEvent.change(inputNumber, {target: {value: '3333.3333.3333.3'}});
        fireEvent.change(inputName, {target: {value: 'Jose Roberto da Silva'}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: '123'}})
        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when date length minor then 6', async () => {
        const { getByLabelText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 
        
        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;

        fireEvent.change(inputNumber, {target: {value: '3333.3333.3333.3'}});
        fireEvent.change(inputName, {target: {value: 'Jose Roberto da Silva'}})      
        fireEvent.change(inputDate, {target: {value: ''}});
        fireEvent.change(inputDate, {target: {value: '02202'}})
        fireEvent.change(inputCCV, {target: {value: '123'}})
        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when cvv length minor then 3', async () => {
        const { getByLabelText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 
        
        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;

        fireEvent.change(inputNumber, {target: {value: '3333.3333.3333.3'}});
        fireEvent.change(inputName, {target: {value: 'Jose Roberto da Silva'}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: ''}});
        fireEvent.change(inputCCV, {target: {value: '12'}})
        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when number empty', async () => {
        const { getByLabelText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 

        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;

        fireEvent.change(inputNumber, {target: {value: ''}});
        fireEvent.change(inputName, {target: {value: 'Jose Roberto da Silva'}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: '123'}})
        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when name empty', async () => {
        const { getByLabelText, getByText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 

        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;
        
        fireEvent.change(inputNumber, {target: {value: '2222.2222.2222.2222'}});
        fireEvent.change(inputName, {target: {value: ''}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: '123'}})

        fireEvent.submit(container.querySelector("form") as Element);
        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when date empty', async () => {
        const { getByLabelText, getByText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 

        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;
        
        fireEvent.change(inputNumber, {target: {value: '2222.2222.2222.2222'}});
        fireEvent.change(inputName, {target: {value: 'Jose da Silva'}})
        fireEvent.change(inputDate, {target: {value: ''}})
        fireEvent.change(inputCCV, {target: {value: '123'}})

        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });

    it('shouldn`t change page when cvv null', async () => {
        const { getByLabelText, getByText, container } = render(
            <ThemeProvider theme={Theme}>
                <CreditCardForm />
            </ThemeProvider>
        ); 

        const inputNumber = getByLabelText("Número do cartão:");
        const inputName = getByLabelText("Nome do Titular:");
        const inputDate = getByLabelText("Validade (mês/ano):");
        const inputCCV = getByLabelText("CVV:") ;
        
        fireEvent.change(inputNumber, {target: {value: '2222.2222.2222.2222'}});
        fireEvent.change(inputName, {target: {value: 'Jose da Silva'}})
        fireEvent.change(inputDate, {target: {value: '022024'}})
        fireEvent.change(inputCCV, {target: {value: ''}})

        fireEvent.submit(container.querySelector("form") as Element);

        expect(mockNavigateClick).not.toHaveBeenCalled();
    });
})