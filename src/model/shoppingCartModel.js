export default {
    setProducts( value ) {
        return { 
            type: 'SET_PRODUCTS', 
            payload: value 
        }
    },
    setSummary( value ) {
        return { 
            type: 'SET_SUMMARY', 
            payload: value 
        }
    }
};