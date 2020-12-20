import styled, { keyframes } from 'styled-components/macro';

import { ILoadingStyles } from './loading.interface';

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const opacityChange = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
`;

const sizeItem = {
  small: '10px',
  medium: '12px',
  large: '14px',
};

const sizeContainer = {
  small: '24px',
  medium: '30px',
  large: '36px',
};

const borderRadiusContainerSize = {
  small: '12px',
  medium: '15px',
  large: '18px',
};

export const Loading = styled.div<ILoadingStyles>`
  width: ${(props) => sizeContainer[props.size]};
  height: ${(props) => sizeContainer[props.size]};
  position: relative;
  overflow: hidden;
  animation: ${rotate} ${(props) => props.speed}s linear infinite;
  > div {
    width: ${(props) => sizeItem[props.size] || sizeItem[props.size]};
    height: ${(props) => sizeItem[props.size] || sizeItem[props.size]};
    border-radius: 50%;
    position: absolute;
    background-color: ${(props) => props.color};
    animation: ${opacityChange} ${(props) => props.speed}s linear infinite alternate;
  }
  > div:nth-of-type(1) {
    animation-delay: 0s;
  }
  > div:nth-of-type(2) {
    animation-delay: ${(props) => props.speed / 3 || 0.8}s;
  }
  > div:nth-of-type(3) {
    animation-delay: ${(props) => (props.speed / 3) * 2 || 1.6}s;
  }
  > div:nth-of-type(4) {
    animation-delay: ${(props) => (props.speed / 3) * 3 || 2.4}s;
  }
`;

export const CircleOne = styled.div`
  left: 0;
  top: 0;
`;

export const CircleTwo = styled.div`
  right: 0;
  top: 0;
`;

export const CircleThree = styled.div`
  left: 0;
  bottom: 0;
`;

export const CircleFour = styled.div`
  right: 0;
  bottom: 0;
`;
