import React from "react";
import {
    PageContainer,
    Container,    
    MainContainer,
    Text, 
    Image, 
    DivImage,
    MenuContainer,
    TextMenu,    
} from './styled';
import ProductCard from "../../components/ProductCard";
import TotalAmountContainer from "../../components/TotalContainer";
import success from "../../assets/success1.png";

const ConfirmationPage = (props) => {
   
    const userData = JSON.parse(localStorage.getItem("@test-front/userPayment"))
           
    const cardNumber = userData[0].number
    const userName = userData[0].name
    const expirationDate = userData[0].date
    const numberSliced = cardNumber.slice(15,19)

    localStorage.removeItem("@test-front/userPayment")
    
    return(
        <PageContainer> 
            <MenuContainer>                
                <TextMenu primary className="bag">SACOLA</TextMenu>                            
                <TextMenu primary className="payment">PAGAMENTO</TextMenu>
                <TextMenu className="confirmation">CONFIRMAÇÂO</TextMenu>
            </MenuContainer>                 
            <MainContainer>
                <DivImage>
                    <Image src={success}/>
                </DivImage>                   
                    
                <Text className="textConfirmationOrange">
                    COMPRA EFETUADA COM SUCESSO
                </Text>
                <Text>PAGAMENTO</Text>
                <Container className="clientInformations">
                    <Text className="textInformationsBlack">
                        ****.****.****.{numberSliced} 
                        <br/>
                        {userName}
                        <br/>
                        {expirationDate}
                    </Text>
                </Container>
                        
                <Text>PRODUTOS</Text>
                <Container className="products">
                    <ProductCard/>
                </Container>

                <TotalAmountContainer/>                
                    
            </MainContainer>                 
        </PageContainer>
    )
}
export default ConfirmationPage





