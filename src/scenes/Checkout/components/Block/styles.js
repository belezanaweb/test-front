import styled from 'styled-components';
import React from 'react';

import colors from '../../../../configs/colors';
import metrics from '../../../../configs/metrics';

export const Container = styled.div`
    display: relative;
    width: 100%;
    margin: 5px 0;
    padding: ${metrics.wrapper} 12px; //fixing padding because layout with little padding out of default
    background-color: ${colors.white};
    border-radius: ${metrics.borderRadius};
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`;

export const ListItem = styled.li`
    width: 100%;
    height: 90px;
    border: 1px #EEE solid;
    border-radius: ${metrics.borderRadius};
`;

export const Figure = ({ src, children }) => (
    <div>
        <img src={src} alt=""/>
    </div>
);