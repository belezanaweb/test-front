import React from "react";
import {
    PageContainer,
    ProductsContainer,    
    MainContainer,
    Text, 
    TextMenu,
    MenuContainer,   
    ButtonConfirmation,
    ButtonConfirmationText    
} from './styles';
import ProductCard from "../../components/ProductCard";
import AmountContainer from "../../components/AmountContainer";
import { useHistory } from "react-router-dom";

const CartPage = (props) => {
    const history = useHistory()

    const onClickGoToPayment = () => {
        history.push('/payment')
    }    
    
    return(
        <PageContainer> 
            <MenuContainer>                
                <TextMenu className="bag">SACOLA</TextMenu>                            
                <TextMenu primary className="payment">PAGAMENTO</TextMenu>
                <TextMenu primary className="confirmation">CONFIRMAÇÂO</TextMenu>
            </MenuContainer>                
            <MainContainer>
                <Text>PRODUTOS</Text>

                <ProductsContainer>
                    <ProductCard/>
                </ProductsContainer>

                <AmountContainer/>

                <ButtonConfirmation type={'button'} onClick={onClickGoToPayment}>
                    <ButtonConfirmationText>
                        SEGUIR PARA O PAGAMENTO
                    </ButtonConfirmationText>
                </ButtonConfirmation>
            </MainContainer>                 
        </PageContainer>
    )
}
export default CartPage