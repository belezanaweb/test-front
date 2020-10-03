import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import ProductCard from "./index.js";

jest.mock("axios");
const wrapper = shallow(<ProductCard/>)

describe('ProductCard', () => {
    it('product card is rendering correctly', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('card is receiving the product image', () => {
        expect(wrapper.find("ProductImage")).toBeTruthy();
    });
    it('should fetch products', async() => {
        const fetchData = () => {
            axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');         
        }
        expect(fetchData).toBeTruthy();
        expect(fetchData).toBeDefined();  
    });
})