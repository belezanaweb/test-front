
import { useState } from "react";
import { useNavigate } from "react-router";
import { BackgroundSection, TotalResult } from "../../stitches.config";
import { CreditCardForm, FormProps } from "../../forms/credit-card/credit-card";
import { ButtonContainer, Title, WrapperBodySession, WrapperFooterSession } from "./checkout.styled";
import { TotalContainer } from "../../components/total-container/total-container";
import { Button } from "../../components/button/button.styled";
import { Loader } from "../../components/loader/loader.component";
import { generateRandomString } from "../../services/random-string.service";

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFormValidity = (isValid: boolean) => {
        setIsFormValid(isValid);
    };

    const handleFormData = (data: FormProps) => {
        setIsLoading(true);

        // Mochando como se fosse um serviço / Tempo de resposta (meramente ilustrativo)
        const id = generateRandomString();
        const params = new URLSearchParams();
        params.append('id', id);


        setTimeout(() => {
            localStorage.setItem('client-data', JSON.stringify(data))
            localStorage.setItem('order-number', JSON.stringify(id))
            navigate(`/confirmacao?${params.toString()}`);
            setIsLoading(false);
        }, 2000);

    };

    return (
        isLoading ? (
            <Loader />
        ) : (
            <>
                <WrapperBodySession>
                    <BackgroundSection>
                        <Title>Cartão de Crédito</Title>
                        <CreditCardForm onValid={handleFormValidity} onSend={handleFormData} />
                    </BackgroundSection>
                </WrapperBodySession>
                <TotalResult>
                    <WrapperFooterSession>
                        <TotalContainer />
                        <ButtonContainer>
                            <Button color={"primary"} type="submit" form="credit-cart-form" disabled={!isFormValid}>Finalizar pedido</Button>
                        </ButtonContainer>
                    </WrapperFooterSession>
                </TotalResult>
            </>
        )
    );
};

export default Checkout;

