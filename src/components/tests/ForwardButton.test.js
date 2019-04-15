import * as React  from 'react';
import { shallow } from '../../enzyme';

import ForwardButton from '../ForwardButton';

describe('ForwardButton component tests', () => { 
    it('renderiza o ForwardButton', () => {
        const onClick = jest.fn();
        const props = {
            'text': 'continuar para o pagamento',
            'onClick': onClick
        } 
        const wrapper = shallow(<ForwardButton {...props} />);        
        expect(wrapper)
    });     
});