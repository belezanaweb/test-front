import React, { useEffect, useContext } from 'react';
import CardContext from '../../contexts/CardContext';
import { Container, ContentContainer, InputContainer } from './styles';
import { useForm } from '../../hooks/useForm';
import { useValidateInput } from '../../hooks/useValidateInput';

function FormPayment(props) {
    const cardContext = useContext(CardContext);
    const { form, onChange } = useForm({
        number: cardContext.card.number,
        name: cardContext.card.name,
        validity: cardContext.card.validity,
        cvv: cardContext.card.cvv
    });
    const { isANum, onlyNumber, onlyLetters, theme, changeTheme } = useValidateInput({
        number: '',
        name: '',
        validity: '',
        cvv: ''
    })

    const setValue = (name, value) => {
        const type = "SET_" + name.toUpperCase();
        cardContext.dispatch({ type: type, value: value });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        let onlyNumbers = onlyNumber(value)
        switch (name) {
            case 'number':
                if (isANum(onlyNumbers)) {
                    if ((onlyNumbers.length === 16) && (value !== 19)) {
                        let numberSliced = []
                        numberSliced.push(onlyNumbers.slice(0, 4),
                            onlyNumbers.slice(4, 8),
                            onlyNumbers.slice(8, 12),
                            onlyNumbers.slice(12, 16));
                        changeTheme(name, false)
                        onChange(name, numberSliced.join('.'));
                    } else if (isANum(onlyNumbers)) {
                        changeTheme(name, true)
                        onChange(name, onlyNumbers);
                    }
                    if (value.length > 16) {
                        changeTheme(name, true)
                        onChange(name, value);
                    }
                }
                break;
            case 'name':
                if (onlyLetters(value)) {
                    onChange(name, value.toUpperCase());
                }
                (value.length < 3) ? (changeTheme(name, true)) : (changeTheme(name, false));
                break;
            case 'validity':
                let month = onlyNumbers.slice(0, 2);
                let year = onlyNumbers.slice(2, 6);
                const yearNow = (new Date(Date.now())).getFullYear();
                const MonthNow = (new Date(Date.now())).getMonth() + 1;
                if (isANum(onlyNumbers) && (onlyNumbers / Math.pow(10, 6) < 1)) {
                    if (onlyNumbers.length === 6 && (value !== 7)) {
                        let numberSliced = []
                        numberSliced.push(onlyNumbers.slice(0, 2), onlyNumbers.slice(2, 6))
                        onChange(name, numberSliced.join('/'));
                    } else if (isANum(onlyNumbers)) {
                        onChange(name, value);
                    }
                    if (value.length === 7) {
                        onChange(name, value);
                    }
                    if ((month <= 12) && (year >= yearNow)) {
                        if (year = yearNow) {
                            if (MonthNow <= month) {
                                changeTheme(name, false)
                            } else {
                                changeTheme(name, true)
                            }
                        } else {
                            changeTheme(name, false)
                        }
                    } else {
                        changeTheme(name, true)
                    }
                }
                break;
            case 'cvv':
                if (isANum(onlyNumbers) && onlyNumbers.length <= 3) {
                    onChange(name, value);
                }
                (value.length !== 3) ? (changeTheme(name, true)) : (changeTheme(name, false));
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setValue('number', form.number)
        setValue('name', form.name)
        setValue('validity', form.validity)
        setValue('cvv', form.cvv)
        if (!(theme.number && theme.name && theme.validity && theme.cvv)) {
            setValue('valid', true)
        } else {
            setValue('valid', false)
        }
    }, [form, theme]);

    return (
        <Container>
            <h1>{props.title}</h1>
            <ContentContainer>
                <InputContainer borderErro={theme.number}>
                    <label>número do cartão:</label>
                    <input
                        maxLength={19}
                        placeholder="____.____.____.____"
                        name="number"
                        value={form.number}
                        onChange={handleInputChange} />
                    <span>Invalid Field</span>
                </InputContainer>
                <InputContainer borderErro={theme.name}>
                    <label>nome do titular:</label>
                    <input
                        type="string"
                        placeholder="Como no cartão"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange} />
                    <span>Invalid Field</span>
                </InputContainer>
                <InputContainer borderErro={theme.validity} inputWidth={"45%"}>
                    <label>validade (mês/ano):</label>
                    <input
                        placeholder="__/____"
                        name="validity"
                        value={form.validity}
                        onChange={handleInputChange} />
                    <span>Invalid Field</span>
                </InputContainer>
                <InputContainer borderErro={theme.cvv} inputWidth={"45%"}>
                    <label>cvv:</label>
                    <input
                        placeholder="___"
                        name="cvv"
                        value={form.cvv}
                        onChange={handleInputChange}
                    />
                    <span>Invalid Field</span>
                </InputContainer>
            </ContentContainer>
        </Container>
    );
}
export default FormPayment;