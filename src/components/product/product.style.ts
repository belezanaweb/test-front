import styled from 'styled-components'

interface IProductStyledProps {
  size: 'small' | 'default'
}
export const ProductStyled = styled.div<IProductStyledProps>`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 11px 11px 14px;

  display: grid;
  grid-template-columns: ${({size}) => size === 'small' ? '50px' : '65px'} 1fr;
  align-items: flex-start;

  gap: 15px 11px;

  .img {
    position: relative;
    grid-row: span 2;
    &::before {
      content: '';
      width: 100%;
      display: block;
      padding-bottom: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: contain;
      object-position: center;
    }
  }

  h3 {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0;
    color: #212122;
  }

  p {
    align-self: flex-end;
    grid-column: 2;
    font-size: 14px;
    text-align: right;
    font-weight: 700;
    line-height: 17px;
  }

  & + & {
    margin-top: 15px;
  }
`
