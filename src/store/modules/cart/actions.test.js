import axios from "axios";
import { getProducts, setCardData, setProducts } from './actions';

describe("Testing Cart Actions", () => {
  test("setCardData", () => {
    const mockdata = {
      numberCard: "4444.4444.4444.4444",
      holder: "Milene Aparecida Taborda",
      validity: "11/2020",
      cvv: "123"
    }

    const action = setCardData(mockdata);

    expect(action.type).toBe("SET_CARD_DATA");
    expect(action.data).toBe(mockdata);
  })

  test("setProducts", () => {
    const mockCart = {
        id: "5b15c171e4b0023bb624f616",
        items: [{
            quantity: 1,
            product: {}
        }],
        subTotal: 624.8,
        shippingTotal: 5.3,
        discount: 30,
        total: 618.9
    }

    const action = setProducts(mockCart)

    expect(action.type).toBe("SET_PRODUCTS")
    expect(action.products).toBe(mockCart)
})

})
