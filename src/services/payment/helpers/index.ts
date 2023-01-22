interface ResponseValidation {
    isError: boolean,
    errorMessage: string
}

export const isNumberValid = (number: string | null) : ResponseValidation => {
    const isError = !number || removeMasking(number).length < 16;
    return {
        isError,
        errorMessage: isError ? "insira um número de cartão válido" : ""
    }
    
}

export const isNameValid = (name: string | null) => {
    const isError = !name || /\d/.test(name);
    return {
        isError,
        errorMessage: isError ? "insira um nome válido" : ""
    }
    
}

export const isDateValid = (date: string | null) => {
    const isError = !date || removeMasking(date).length < 6;
    return {
        isError,
        errorMessage: isError ? "insira uma data válida" : ""
    }
    
}

export const isCVVValid = (cvv: string | null) => {
    const isError = !cvv || removeMasking(cvv).length < 3;
    return {
        isError,
        errorMessage: isError ? "insira um cvv válido" : "" 
    }
    
}

export const removeMasking = (value: string) => {
    return value.replace(/[^0-9]+/g, "")
}

export const lastNumbersCard = (value: string) => {
   const arrayNumbers = value.split(".")
   return arrayNumbers[arrayNumbers.length - 1]
}