import styled from 'styled-components';

export const Wrappper = styled.div`
  min-height: calc(100vh - 40px);

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-between;
`;

export const Header = styled.div`
    height: 40px;
    background-color: ${(props) => props.theme.template.content};
    border-bottom: ${(props) => props.theme.border.size} solid ${(props) => props.theme.border.color};
    box-shadow: 0px 2px 4px ${(props) => props.theme.border.color};

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

export const Item = styled.div<{ selected: boolean }>`
  border-bottom: ${(props) => props.selected ? '4px' : '1px'} solid ${(props) => props.selected ? props.theme.font.color[100] : props.theme.font.color[25]};
  width: 90px;
  text-align: center;

  span {
    line-height: ${(props) => props.selected ? '36px' : '39px'};
  }
`;
