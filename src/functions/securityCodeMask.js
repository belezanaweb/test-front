export const securityCodeMask = (value) => {
    const newValue = value
        .replace(/([A-za-z])/, "");
        
    return newValue;
}