
export default function validatePayment(values) {
    let errors = {};

    const expirationDateValidation = () => {
        let expirationDate = values.expirationDate.replace("/", "");
        let expirationDateMonth = Number(expirationDate.slice(0, 2));
        let expirationDateYear = Number(expirationDate.slice(2));
        const currentDate = new Date();
        let currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        if (currentMonth < 10) { currentMonth = Number("0" + currentMonth) }

        if (currentYear >= expirationDateYear && currentMonth > expirationDateMonth) { return false }
        else if (currentYear <= expirationDateYear) { return true };
    }

    if (values.creditCard.length < 19) {
        errors.creditCard = "Número de cartão de crédito inválido!"
    } 

    if(values.name.length < 3) {
        errors.name = "Titular inválido!"
    } else if (!/[A-Za-z]$/.test(values.name)) {
        errors.name = "Titular inválido!"
    } 

    if (!values.expirationDate || !expirationDateValidation()) {
        errors.expirationDate = "Data de validade inválida!"
    }

    if (values.securityCode.length !== 3) {
        errors.securityCode = "CVV inválido!"
    }

    return errors;
}