import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
`;

export const Image = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  margin-right: 1.4rem;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: #212122;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;
  text-align: right;
`;
