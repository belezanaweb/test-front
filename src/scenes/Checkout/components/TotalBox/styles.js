import React from 'react';
import styled from 'styled-components';
import metrics from '../../../../configs/metrics';
import colors from '../../../../configs/colors';

export const Container = styled.div`
    border-radius: 3px;
    border: 1px solid #CCC;
    margin: 15px 9px 5px;
    padding: 4px 13px 12px;
`

export const Line = styled.div`
    display: flex;
    padding: 10px 0 0;
    font-size: ${metrics.fonts.size.normal};
    text-transform: uppercase;
    justify-content: space-between;
    &.discount{
        padding: 9px 0 0;
        color: ${colors.primary};
    }
    &.total{
        padding: 18px 0 0;
        font-weight: bold;
    }
`

export const Index = styled.div`
    padding: 0;
`

export const Value = styled.div`
    padding: 0;
`

export const Item = ({ index, value, type=null, children }) => (
    <Line className={type}>
        <Index>{index}</Index>
        <Value>{type==="discount"?"- "+value:value}</Value>
    </Line>
);
