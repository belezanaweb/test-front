import * as React  from 'react';
import { shallow } from '../../enzyme';

import PurchaseSummary from '../PurchaseSummary';

describe('PurchaseSummary component tests', () => { 
    it('renderiza o PurchaseSummary', () => {
        const shoppingCart = {
            "subTotal": 624.8,
            "shippingTotal": 5.3,
            "discount": 30,
            "total": 618.9
        }        
        const wrapper = shallow(<PurchaseSummary shoppingCart={shoppingCart} />);        
        expect(wrapper)
    });     
});