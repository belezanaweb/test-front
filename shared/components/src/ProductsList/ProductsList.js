import { Product } from "./Product";
import * as S from "./ProductsList.styles";

export const ProductsList = ({ products = [] }) => {
  return (
    <S.UL>
      {products.map((product, i) => (
        <S.LI key={`box-card-item-${i}`}>
          <Product
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            name={product.name}
            price={product.price}
          />
        </S.LI>
      ))}
    </S.UL>
  );
};
