import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react'
import Theme from '../../theme';

import FormInput from '.'


describe('FormInput component', () => {
    it('should render component', () => {
        const { getByLabelText, getByText, debug } = render(
            <ThemeProvider theme={Theme}>
                <FormInput  
                    mask=""
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'/>
            </ThemeProvider>
        ); 
        const Label = getByText("teste");
        const Input = getByLabelText("teste");
        
        expect(Label).toBeDefined();
        expect(Input).toHaveAttribute("id", "teste");
        expect(Input).toHaveAttribute("name", "teste");
        expect(Input).toHaveAttribute("type", "text");
        expect(Input).toHaveAttribute("placeholder", "digite aqui");

    });

    it('should render component with masking', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={Theme}>
                <FormInput  
                    mask="9999.9999.9999.9999"
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'/>
            </ThemeProvider>
        ); 

        const Input = getByLabelText("teste");
        fireEvent.change(Input, {target: {value:  "2222222222222222"}});
        expect(Input).toHaveValue("2222.2222.2222.2222")

    });

    it('should render component with error', () => {
        const { getByText } = render(
            <ThemeProvider theme={Theme}>
                <FormInput  
                    mask="9999.9999.9999.9999"
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'
                    error={{isError: true, errorMessage: "esta com erro"}}/>
            </ThemeProvider>
        ); 
        const errorMessage = getByText("esta com erro");
        expect(errorMessage).toBeDefined()
    });
})