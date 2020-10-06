import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const NavbarDosSteps = styled.div`
    width: 100vw;
    height: 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 8px #9999;
`
const Steps = styled.p`
    font-family: 'Helvetica';
    color: #CCCC;
    font-weight: bold;
    font-size: 1rem;
        :active{
            color: #FF7800;
        }
`

function Navbar () {
        
        const history = useHistory();
        
        function redirectCart() {
            history.push('/')
        }

        function redirectPayment() {
          history.push('/pagamento');
        }

        function redirectSuccess() {
            history.push('/confirmacao')
        }
  return (
        <NavbarDosSteps>
            <Steps onClick={redirectCart}>SACOLA</Steps>
            <Steps onClick={redirectPayment}>PAGAMENTO</Steps>
            <Steps onClick={redirectSuccess}>CONFIRMAÇÃO</Steps>
        </NavbarDosSteps>
  )
}

export default Navbar

