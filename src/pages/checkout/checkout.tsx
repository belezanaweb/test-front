
import { useState } from "react";
import { BackgroundSection, TotalResult } from "../../stitches.config";
import { CreditCardForm } from "../../forms/credit-card/credit-card";
import { ButtonContainer, Title, WrapperBodySession, WrapperFooterSession } from "./checkout.styled";
import { TotalContainer } from "../../components/total-container/total-container";
import { Button } from "../../components/button/button.styled";

const Checkout: React.FC = () => {
    const [isFormValid, setIsFormValid] = useState(false);

    const handleFormValidity = (isValid: boolean) => {
        setIsFormValid(isValid);
    }

    return (
        <>
            <WrapperBodySession>
                <BackgroundSection>
                    <Title>Cartão de Crédito</Title>
                    <CreditCardForm onValid={handleFormValidity} />
                </BackgroundSection>
            </WrapperBodySession>
            <TotalResult>
                <WrapperFooterSession>
                    <TotalContainer />
                    <ButtonContainer>
                        <Button type="submit" form="credit-cart-form" disabled={!isFormValid}>Finalizar pedido</Button>
                    </ButtonContainer>
                </WrapperFooterSession>
            </TotalResult>
        </>
    );
};

export default Checkout;

