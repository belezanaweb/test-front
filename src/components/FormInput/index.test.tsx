import { fireEvent, render } from '@testing-library/react'
import FormInput from '.'
import { renderWithTheme } from '../../utils/helpers';


describe('FormInput component', () => {
    it('should render component', () => {
        const { getByLabelText, getByText, debug } = render(
            renderWithTheme(
                <FormInput  
                    mask=""
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'/>
            )
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
            renderWithTheme(
                <FormInput  
                    mask="9999.9999.9999.9999"
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'/>
            )
        ); 

        const Input = getByLabelText("teste");
        fireEvent.change(Input, {target: {value:  "2222222222222222"}});
        expect(Input).toHaveValue("2222.2222.2222.2222")

    });

    it('should render component with error', () => {
        const { getByText } = render(
            renderWithTheme(
                <FormInput  
                    mask="9999.9999.9999.9999"
                    label="teste"
                    id="teste"
                    name="teste"
                    type="text" 
                    placeholder='digite aqui'
                    error={{isError: true, errorMessage: "esta com erro"}}/>
            )
        ); 
        const errorMessage = getByText("esta com erro");
        expect(errorMessage).toBeDefined()
    });
})