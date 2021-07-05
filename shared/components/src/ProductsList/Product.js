import * as S from "./Products.styles";

export const Product = ({ imageSrc, imageAlt, name, price = null }) => {
  return (
    <S.Figure>
      <S.ImageContainer>
        <S.Image src={imageSrc} alt={imageAlt} />
      </S.ImageContainer>
      <S.Figcaption>
        <S.Label>{name}</S.Label>
        {price && (
          <S.Price>
            <strong>{price}</strong>
          </S.Price>
        )}
      </S.Figcaption>
    </S.Figure>
  );
};
