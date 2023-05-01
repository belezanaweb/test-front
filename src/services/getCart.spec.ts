import { Mock } from "vitest";
import { mockCart } from "../test/setup-test";
import getCart from "./getCart";


const mocks = {
    response: mockCart
}

global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mocks.response),
    })
) as Mock;

beforeEach(() => {
    (fetch as Mock).mockClear();
});


describe("Testing the getCart service", () => {
    it("should return the mocked fetch response in case of success", async () => {
        const cart = await getCart()
        expect(cart).toEqual(mocks.response);
    });


    it("should throw an error if the response is somehow not ok", async () => {
        (global.fetch as Mock).mockImplementationOnce(() => Promise.resolve({ok: false, json: () => Promise.reject({message: "Error"})}))
        try {
            await getCart();
            // Fail test if above expression doesn't throw anything
            expect(true).toBe(false);
        } catch (error: any) {
            expect(error.message).toBe("Error");
        }
    });

});
