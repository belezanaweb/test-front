import { useNavigate } from 'react-router';
import { Button } from '../../components/button/button.styled';
import { TotalContainer } from '../../components/total-container/total-container';
import { BackgroundSection, TotalResult } from '../../stitches.config';
import { ButtonContainer, WrapperBodySession, WrapperFooterSession, Space } from './confimation.styled';
import { useEffect } from 'react';
import { localStorageService } from '../../services/local-storage.service';

const ConfirmationOrder = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('beforeunload', onDestroy);

        return () => {
            window.removeEventListener('beforeunload', onDestroy);
        }
    }, []);

    const goToInitial = () => {
        navigate('/carrinho');
    };

    const onDestroy = () => {
        localStorageService.remove('userData');
        localStorageService.remove('cart');
        localStorageService.remove('order-number');
    };

    return (
        <>
            <WrapperBodySession>
                <BackgroundSection>
                    <h1>ConfirmationOrder</h1>
                    <p>Aqui fica o conteúdo do ConfirmationOrder.</p>
                </BackgroundSection>
                <Space />
                <BackgroundSection>
                    <h1>ConfirmationOrder</h1>
                    <p>Aqui fica o conteúdo do ConfirmationOrder.</p>
                </BackgroundSection>
            </WrapperBodySession>
            <TotalResult>
                <WrapperFooterSession>
                    <TotalContainer />
                    <ButtonContainer>
                        <Button onClick={() => goToInitial()}>Voltar ao inicio da Loja</Button>
                    </ButtonContainer>
                </WrapperFooterSession>
            </TotalResult>
        </>
    );
};

export default ConfirmationOrder;
