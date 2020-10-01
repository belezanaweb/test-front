import styled, { css } from 'styled-components';
import { Form as Unform} from '@unform/web';

export const ContainerTable = styled.div`
  margin-top: 2vw;
  text-align: center;
`;

export const ProductTable = styled.div`
  width: 100%;

 h1 {
   color: #999;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    padding: 12px;
  }
`
export const Form = styled(Unform) `
  > div {
    background: #fff;
    color: #999;
    padding: 12px 15px;
    border-radius: 3px;
    text-align: left;

    > span {
        color: #F30;
        font-size: 12px;
    }

    label {
      display: block;
    }

    * + label {
        margin-top: 25px;
      }

    input {
      width: 100%;
      padding: 10px ;
      border-radius: 3px;
      color: #999;
      background-color: #FFF;
      border: 1px solid #E7E7E7;
      box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);

      ::-webkit-input-placeholder {
        color: #999;
      }

      :focus {
        border: 1px solid #A43287;
      }
    }

    section {
      display: flex;
      margin-top: 25px;

      div {
        width: 100%;

        input {
          width: 100%;
        }

        >span {
        color: #F30;
        font-size: 12px;
      }
      }

      /* div:nth-child(2) {
        margin-left: 20px;
      } */
    }
   }
`;
