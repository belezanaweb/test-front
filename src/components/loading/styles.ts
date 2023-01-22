
import styled from 'styled-components';


export const Wrapper = styled.div`
    position: absolute;
    background: rgba(255, 255, 255, 0);
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LdsRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 49px;
    margin: 8px;
    border: 5px solid #FF6C00;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    div:nth-child(1) {
    animation-delay: -0.45s;
    }

    div:nth-child(2) {
    animation-delay: -0.3s;
    }

    div:nth-child(3) {
    animation-delay: -0.15s;
    }

    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`;
