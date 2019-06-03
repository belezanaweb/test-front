import React from 'react';
import styled from 'styled-components';
import metrics from '../../../../configs/metrics';
import colors from '../../../../configs/colors';

export const Container = styled.div`
    border-radius: 3px;
    border: 1px solid #CCC;
    margin: ${metrics.wrapper};
    padding: 3px 0 11px;
`

export const Line = styled.div`
    display: flex;
    padding: 9px 12px 0px;
    font-size: ${metrics.fonts.size.normal};
    text-transform: uppercase;
    justify-content: space-between;
    &.discount{
        padding: 8px 12px 0px;
        color: ${colors.primary};
    }
    &.total{
        padding: 16px 12px 0px;
        font-weight: bold;
    }
`

export const Index = styled.div`
    // padding: 2px;
`

export const Value = styled.div`
    // padding: 2px;
`

export const Item = ({ index, value, type=null, children }) => (
    <Line className={type}>
        <Index>{index}</Index>
        <Value>{type==="discount"?"- "+value:value}</Value>
    </Line>
);
