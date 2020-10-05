import validatePayment from "./validatePayment";
import "@testing-library/jest-dom/extend-expect";

describe("Validate payment tests to guarantee it's functionality", () => {
    test("Test if it returns true when all the inserted data is true.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.5555",
            name: "José Carlos",
            expirationDate: "01/2021",
            securityCode: "313"
        })

        expect(paymentValidation).toEqual({})
    })

    test("Test if it returns false when the inserted credit card is false.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.555",
            name: "José Carlos",
            expirationDate: "01/2022",
            securityCode: "313"
        })  

        expect(paymentValidation).toEqual({ "creditCard": "Número de cartão de crédito inválido!"})
    })
    
    test("Test if it returns false when the inserted name is false.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.5555",
            name: "zé",
            expirationDate: "01/2022",
            securityCode: "313"
        })  
        expect(paymentValidation).toEqual({ "name": "Titular inválido!"})
    })

    test("Test if it returns false when name has numbers instead of characters.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.5555",
            name: "5515151",
            expirationDate: "01/2022",
            securityCode: "313"
        })  
        expect(paymentValidation).toEqual({ "name": "Titular inválido!"})
    })
    
    test("Test if it returns false when the inserted expiration date is false.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.5555",
            name: "José Carlos",
            expirationDate: "01/2020",
            securityCode: "313"
        })  

        expect(paymentValidation).toEqual({ "expirationDate": "Data de validade inválida!"})
    })

    test("Test if it returns false when the inserted security code is false.", async () => {
        const paymentValidation = validatePayment({ 
            creditCard: "5555.5555.5555.5556",
            name: "José Carlos",
            expirationDate: "01/2022",
            securityCode: "22"
        })  

        expect(paymentValidation).toEqual({ "securityCode": "CVV inválido!"})
    })
})