export const creditCardMask = (value) => {
    const newValue = value
        .replace(/\D/g, '') 
        .replace(/(\d{4})(\d)/, '$1.$2') 
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d)/, '$1.$2')
        .replace(/(\d{4})(\d)/, '$1.$2')

    return newValue;
}