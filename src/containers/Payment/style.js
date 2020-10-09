import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: flex-start;
  }
`;

export const InputBigger = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 320px;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    padding-left: 1vh;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    font-family: "Helvetica Neue";
    font-size: 16px;
    line-height: 19px;
    ::placeholder {
        color: #E0E7EE;
    }
`;

export const BoxBigger = styled.div`
    padding: 1vh;
`;

export const BoxSmaller = styled.div`
    display: flex;
    padding: 1vh;
`;

export const LabelBigger = styled.label`
    height: 14px;
    width: 129.71px;
    color: #CCC;
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
`;

export const LabelSmaller = styled.label`
    height: 64px;
    width: 160px;
    color: #CCC;
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
`;

export const InputSmaller = styled.input`
    box-sizing: border-box;
    height: 45px;
    width: 140px;
    border-radius: 3px;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
    padding-left: 1vh;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
    ::placeholder {
            color: #E0E7EE;
    }
`;
