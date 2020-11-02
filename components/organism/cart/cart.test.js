
import React from 'react';
import { mount } from 'enzyme';
import CartTemplate from './index';
describe('Fazendo testes no Next.JS com Enzyme', () => {
    it('Deve conter o texto "Welcome to Next.js!" dentro de um H1 no componente Index', () => {
        const wrap = mount(<CartTemplate />);
        expect(wrap.find('h2').text()).toEqual('Produtos');
    });
});