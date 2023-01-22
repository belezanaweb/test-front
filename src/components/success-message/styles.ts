
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export const ContainerIcon = styled.div`
    border: 1px solid #FF7800;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 11px;
`

export const CheckIcon = styled(FontAwesomeIcon)`
    height: 15px;
    width: 20px;
    color: #FF7800;
`

export const Container = styled.div`
    margin: 20px 0;
`
export const Message = styled.p`
    color: #FF7800;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
`