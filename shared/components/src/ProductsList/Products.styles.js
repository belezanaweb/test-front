import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 10px;

  border-radius: 3px;
  border: 1px solid #eee;
`;

export const Figcaption = styled.figcaption`
  margin-left: 10px;
`;

export const ImageContainer = styled.div`
  width: 65px;
  height: 65px;

  text-align: center;
`;

export const Image = styled.img`
  width: 65px;
`;

export const Label = styled.p`
  margin-bottom: 15px;

  font-size: 0.92rem;
  line-height: 16px;
`;

export const Price = styled(Label)`
  margin-bottom: 0;
  font-size: 1rem;

  text-align: right;
`;
