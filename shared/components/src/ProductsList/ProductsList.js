import { Product } from "./Product";

export const ProductsList = ({ products = [] }) => {
  return (
    <ul>
      {products.map((product, i) => (
        <li key={`box-card-item-${i}`}>
          <Product
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            name={product.name}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  );
};
