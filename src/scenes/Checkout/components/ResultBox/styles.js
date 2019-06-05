import styled from 'styled-components';
import metrics from '../../../../configs/metrics';
import colors from '../../../../configs/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
        margin: 11px;
    }
    margin-bottom: 10px;
`;

export const Text = styled.div`
    font-size: ${metrics.fonts.size.normal};
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.primary};
    line-height: 17px;
`;
