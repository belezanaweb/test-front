import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import ProductCard from "./index.js";

jest.mock("axios");
const wrapper = shallow(<ProductCard/>)

describe('ProductCard', () => {
    it('o Product card está sendo corretamente renderizado', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('o Product image renderizado corretamente', () => {
        expect(wrapper.find("ProductImage")).toBeTruthy();
    });
    it('should fetch products', async() => {
        const fetchData = () => {
            axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');         
        }
        expect(fetchData).toBeTruthy();
        expect(fetchData).toBeDefined();        
    })
})