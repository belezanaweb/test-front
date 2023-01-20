import React, {BaseHTMLAttributes} from 'react';
import styled from 'styled-components';

const Wrapper: React.FC<BaseHTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <WrapperUI>
        { children }
    </WrapperUI>
  );
};

const WrapperUI = styled.section`
    padding: 0 10px;
    max-width: 960px;
    margin: 0 auto;
`;

export default Wrapper;