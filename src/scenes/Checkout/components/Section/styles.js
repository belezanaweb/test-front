import styled from 'styled-components';
import colors from '../../../../configs/colors';
import metrics from '../../../../configs/metrics';

export const Container = styled.section`
    margin: ${metrics.wrapper};
`;

export const Caption = styled.div`
    width: 100%;
    font-size: ${metrics.fonts.size.normal};
    text-transform: uppercase;
    font-weight: bold;
    color: ${colors.gray};
    margin: 0 ${metrics.wrapper};
`;