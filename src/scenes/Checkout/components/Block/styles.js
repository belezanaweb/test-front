import styled from 'styled-components';
import React from 'react';

import colors from '../../../../configs/colors';
import metrics from '../../../../configs/metrics';

export const Container = styled.div`
    display: relative;
    width: 100%;
    margin: 5px 0 0 0;
    padding: 4px 12px 5px; //fixing padding because layout with little padding out of default
    background-color: ${colors.white};
    border-radius: ${metrics.borderRadius};
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;

export const ListItem = styled.li`
    width: 100%;
    height: 90px;
    border: 1px #EEE solid;
    border-radius: ${metrics.borderRadius};
    display: inline-flex;
    margin-top: 7px;
    margin-bottom: 8px;
    padding: 0px 0 0 0;
    // align-items: center;
`;

export const BoxImage = styled.div`
    padding: 3px ${metrics.wrapper} 0;
    align-self: center;
`

export const BoxInfo = styled.div`
    padding: 9px 0px;
    position: relative;
`

export const Image = styled.img`
    width:65px;
    height:65px;
`
export const DescriptionText = styled.p`
    font-size: ${metrics.fonts.size.small};
    min-height: 32px;
    max-height: 32px;
`

export const PriceText = styled.p`
    font-size: ${metrics.fonts.size.small};
    text-align: right;
    padding: 0 9px 0 0;
    font-size: ${metrics.fonts.size.normal};
    font-weight: bold;
    margin: 16px 0 0 0px;
    width: 100%;
    // position: absolute;
    // bottom: 11px;
    // right: -8px;
`

export const Figure = ({ className, src, children }) => (
    <BoxImage>
        <Image src={src} alt=""/>
    </BoxImage>
);

export const Description = ({ text, price, children }) => (
    <BoxInfo>
        <DescriptionText>{text}</DescriptionText>
        <PriceText>{price}</PriceText>
    </BoxInfo>
);