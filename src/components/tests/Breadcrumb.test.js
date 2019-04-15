import * as React  from 'react';
import { shallow } from '../../enzyme';

import Breadcrumb from '../Breabcrumb';

describe('Breadcrumb component tests', () => {    
    it('renderiza o Breadcrumb com o step = 1', () => {
        const step = 1     
        const wrapper = shallow(<Breadcrumb step={step} />);        
        expect(wrapper)
    });

    it('renderiza o Breadcrumb com o step = 2', () => {
        const step = 2        
        const wrapper = shallow(<Breadcrumb step={step} />);        
        expect(wrapper)
    });

    it('renderiza o Breadcrumb com o step = 3', () => {
        const step = 3     
        const wrapper = shallow(<Breadcrumb step={step} />);        
        expect(wrapper)
    });    
});