import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  margin-bottom: 10px;

  border: 2px solid #ff7800;
  border-radius: 100%;

  text-align: center;
`;

export const Image = styled.img`
  width: 20px;
  height: 15px;
`;

export const H1 = styled.h1`
  margin-bottom: 20px;

  color: #ff7800;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;
