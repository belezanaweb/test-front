import styled from 'styled-components';

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  background: var(--color-white);
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 12px 0;

  & > div {
    display: flex;
    justify-content: space-between;
    padding-left: 11px;

    img {
      display: none;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      padding: 20px 0;

      img {
        display: initial;
        position: absolute;
        left: 40px;
        top: 25px;
        width: 70px;
      }
    }
  }
`;

export const Item = styled.span<ItemProps>`
  color: ${
    (props) => props.selected ? 'var(--color-orange)' : 'var(--color-gray)'
  };
  font-size: 13px;
  font-weight: bold;
`;
