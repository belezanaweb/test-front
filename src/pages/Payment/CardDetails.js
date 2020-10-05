import React, { useContext } from 'react'
import CardDetailsContext from '../../contexts/CardDetails'
import { CardDetailsWrapper, Content, ErrorMessage, Input, Label, LastDatails } from './style'

const CardDetails = () => {
    const { form, handleInputChange } = useContext(CardDetailsContext)

    return (
        <CardDetailsWrapper>
            <Content>
                <Label>Número do cartão</Label>
                <Input
                    placeholder="____.____.____.____"
                    onChange={handleInputChange}
                    name="cardNumber"
                    value={form.cardNumber}
                    mask="9999.9999.9999.9999"
                    pattern="^\d{4}\.\d{4}\.\d{4}\.\d{4}$"
                    required
                />
                {(!form.cardNumber ||
                    !/\d{4}\.\d{4}\.\d{4}\.\d{4}/.test(form.cardNumber)) &&
                    <ErrorMessage>Invalid Field</ErrorMessage>}
            </Content>
            <Content>
                <Label>Nome do Titular</Label>
                <Input
                    placeholder="Como no cartão"
                    onChange={handleInputChange}
                    name="cardholderName"
                    value={form.cardholderName}
                    pattern="[A-Za-zÀ-ú ]{5,}"
                    required
                />
                {(!form.cardholderName ||
                    !/[A-Za-zÀ-ú ]{5,}/.test(form.cardholderName)) &&
                    <ErrorMessage>Invalid Field</ErrorMessage>}
            </Content>
            <LastDatails>
                <Content>
                    <Label>Validade (mês/ano):</Label>
                    <Input
                        placeholder="__/____"
                        onChange={handleInputChange}
                        name="expiringDate"
                        value={form.expiringDate}
                        mask="99/9999"
                        pattern="^(1[0-2]|0[1-9]|\d)/(20[2-9][0-9]|[2-9][1-9])$"
                        required
                    />
                    {(!form.expiringDate ||
                        !/(1[0-2]|0[1-9]|\d)-(20[2-9][0-9]|[2-9][1-9])/.test(form.expiringDate)) &&
                        <ErrorMessage>Invalid Field</ErrorMessage>}
                </Content>
                <Content>
                    <Label>CVV:</Label>
                    <Input
                        placeholder="___"
                        onChange={handleInputChange}
                        name="cvv"
                        value={form.cvv}
                        mask="999"
                        pattern="[0-9]{3}"
                        required
                    />
                    {(!form.cvv ||
                        !/[0-9]{3}/.test(form.cvv)) &&
                        <ErrorMessage>Invalid Field</ErrorMessage>}
                </Content>
            </LastDatails>
        </CardDetailsWrapper>
    )
}

export default CardDetails