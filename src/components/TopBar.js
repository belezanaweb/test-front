import React from 'react'; 
import styled from 'styled-components'; 
import { connect } from "react-redux";
import { routes } from "../containers/Router";

const Wrapper = styled.div`
    height: 9vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #d3d3d4 ;
`

const Button = styled.button`
    padding: 0;
    margin: 0;
    height: 16px;
    width: 101px;
    color: ${props => props.isActive ? '#FF7800' : '#CCC'};
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    background-color: #FFF;
    border: none;
`

const TopBar = (props) => {

    const buttons = [
        {
            name: 'SACOLA',
            pageRouter: routes.root
        },
        {
            name: 'PAGAMENTO',
            pageRouter: routes.payment
        },
        {
            name: 'CONFIRMAÇÃO',
            pageRouter: routes.confirmation
        },
    ]
    return (
        <Wrapper>
            { buttons.map(button => (
                <Button isActive={props.currentPage && props.currentPage == button.pageRouter}>
                    {button.name} 
                </Button>
            ))}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        currentPage: state.menu
    }
}
  
export default connect(mapStateToProps, null)(TopBar);