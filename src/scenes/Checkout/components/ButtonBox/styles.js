import styled from 'styled-components'
import metrics from '../../../../configs/metrics'
import colors from '../../../../configs/colors'

export const Container = styled.div`
  margin: 20px 0;
`

export const Button = styled.button`
    background-color: ${colors.secondary};
    border-radius: ${metrics.borderRadius};
    font-size: ${metrics.fonts.size.big};
    padding: 18px 0;
    color: ${colors.white};
    font-weight: 700;
    letter-spacing: .5px;
    text-transform: uppercase;
    width: 100%;
    line-height: 24px;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    text-align: center;
    outline: none;
    border: none;
    :hover{
        background-color: ${colors.primary_shadow}
        cursor: pointer;
    }
`
