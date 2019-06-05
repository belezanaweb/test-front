import styled from 'styled-components';
import metrics from '../../../../configs/metrics';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1px 0;
    p.simple{
        padding: 8px 0px 3px;
        font-size: ${metrics.fonts.size.normal};
        line-height: 17px;
    }
    section.content{
        margin-top: 15px;
    }
`;
