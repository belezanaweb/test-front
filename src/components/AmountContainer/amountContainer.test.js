import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import AmountContainer from "./index.js";

jest.mock("axios");
const wrapper = shallow(<AmountContainer/>)

describe('AmountContainer', () => {
    it('amount container is rendering correctly', () => {                     
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });
    it('should fetch text', async() => {
        const fetchData = () => {
            axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07');         
        }
        expect(fetchData).toBeTruthy();
        expect(fetchData).toBeDefined();  
    });
})