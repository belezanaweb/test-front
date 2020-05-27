import styled from 'styled-components';

const Text = styled.span`
  color: ${({ theme }) => theme.colors.grayDark};
  display: inline-flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.015em;
`;

export default Text;
