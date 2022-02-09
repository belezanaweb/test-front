import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 9999;

  span {
    background: white;
    border-radius: 4px;

    bottom: calc(100% + 12px);
    color: #312e38;

    font-size: 1rem;
    letter-spacing: 0.5px;
    font-weight: 500;

    left: 50%;
    opacity: 0;
    padding: 8px;

    position: absolute;
    transform: translateX(-50%);
    transition: all 0.2s;
    visibility: hidden;
    min-width: 5rem;

    white-space: nowrap;

    &::before {
      content: '';
      border-color: white transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
