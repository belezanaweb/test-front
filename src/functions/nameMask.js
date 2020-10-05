export const nameMask = (value) => {
    const newValue = value
        .replace(/([0-9])/, "");
        
    return newValue;
}