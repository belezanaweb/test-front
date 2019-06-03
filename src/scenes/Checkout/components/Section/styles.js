import styled from 'styled-components';
import colors from '../../../../configs/colors';
import metrics from '../../../../configs/metrics';

export const Container = styled.section`
    margin: 10px;
`;

export const Caption = styled.div`
    width: 100%;
    font-size: ${metrics.fonts.size.normal};
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.gray};
    margin: 1px ${metrics.wrapper} 0;
`;