
import { isNumberValid, isCVVValid, isDateValid, isNameValid } from '.'
import { invalidNumber,validResponse,invalidName,invalidDate,invalidCVV } from './mock'
describe('Payment helpers', () => {
    it('should return response number invalid', () => {     
        expect(isNumberValid("1111.1111.1111.111")).toEqual(invalidNumber)
        expect(isNumberValid("")).toEqual(invalidNumber)
    });
    it('should return response number valid', () => {     
        expect(isNumberValid("1111.1111.1111.1111")).toEqual(validResponse)
    });

    it('should return response name invalid', () => {     
        expect(isNameValid("Jose 123")).toEqual(invalidName)
        expect(isNameValid("")).toEqual(invalidName)
    });
    it('should return response name valid', () => {     
        expect(isNameValid("Jose")).toEqual(validResponse)
    });

    it('should return response date invalid', () => {     
        expect(isDateValid("02202")).toEqual(invalidDate)
        expect(isDateValid("")).toEqual(invalidDate)
    });
    it('should return response date valid', () => {     
        expect(isDateValid("022024")).toEqual(validResponse)
    });


    it('should return response cvv invalid', () => {     
        expect(isCVVValid("12")).toEqual(invalidCVV)
        expect(isCVVValid("")).toEqual(invalidCVV)
    });
    it('should return response cvv valid', () => {     
        expect(isCVVValid("123")).toEqual(validResponse)
    });
    
})