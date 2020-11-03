
import React from 'react';
import { render } from 'enzyme';
import ButtonCta from './cta';

describe('Fazendo testes no Next.JS com Enzyme', () => {
    it('Deve conter texto dentro do componente button', () => {
        const children = 'Seguir para o pagamento'
        const wrapper = render(<ButtonCta>{children}</ButtonCta>);
        expect(wrapper.text()).toEqual(children);
    });
});