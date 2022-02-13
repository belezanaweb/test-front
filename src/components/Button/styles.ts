import styled from 'styled-components';

interface ButtonProps {
  width?: string;
  type?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};

  padding: 1.8rem 0.94rem;
  border-radius: 0.3rem;

  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  box-shadow: 0 0.3rem 0 0 ${(props) => props.theme.primaryDark};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  @media (min-width: 48rem) {
    grid-area: button;
  }

  &.progress-btn {
    position: relative;
    display: inline-block;
    transition: all 0.4s ease;
  }

  &.progress-btn:not(.active) {
    cursor: pointer;
  }

  &.progress-btn .btn {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    line-height: 50px;
    text-align: center;
    z-index: 10;
    opacity: 1;
  }

  &.progress-btn .progress {
    width: 0%;
    z-index: 5;
    background: #d32f2f;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &.progress-btn.active .progress {
    opacity: 1;
    animation: progress-anim 5s ease 0s;
  }

  &.progress-btn[data-progress-style='fill-back'] .progress {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  @keyframes progress-anim {
    0% {
      width: 0%;
    }
    5% {
      width: 0%;
    }
    10% {
      width: 15%;
    }
    30% {
      width: 40%;
    }
    50% {
      width: 55%;
    }
    80% {
      width: 100%;
    }
    100% {
      width: 100%;
    }
  }
`;
