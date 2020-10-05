export const expirationDateMask = (value) => {
    const newValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2') 
    return newValue;
}