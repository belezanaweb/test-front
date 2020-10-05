import { useState, useEffect } from "react";
import { creditCardMask } from "../functions/creditCardMask";
import { nameMask } from "../functions/nameMask";
import { expirationDateMask } from "../functions/expirationDateMask";
import { securityCodeMask } from "../functions//securityCodeMask";

export const useForm = (callback, validatePayment) => {
    const [values, setValues] = useState({name: "", creditCard: "", expirationDate: "", securityCode: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => { 
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    })

    const handleChange = event => {
        const { name, value } = event.target;

        if(name === "creditCard") { 
            let newValue = creditCardMask(value); 
            setValues({ ...values, [name]: newValue }) 
        } 
        if(name === "name") { 
            let newValue = nameMask(value); 
            setValues({ ...values, [name]: newValue })
        }
        if(name === "expirationDate") { 
            let newValue = expirationDateMask(value); 
            setValues({ ...values, [name]: newValue }) 
        }
        if(name === "securityCode") { 
            let newValue = securityCodeMask(value); 
            setValues({ ...values, [name]: newValue })
        }    
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validatePayment(values));
        setIsSubmitting(true);
    };

    return { values, handleChange, handleSubmit, errors };
}

