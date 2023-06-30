import useCartProvider from '../hooks/useCartProvider';
import Product from './Product';

export default function ListOfProducts() {
  const { cart } = useCartProvider();

  return (
    <div className="flex flex-col bg-white rounded-lg border border-stone-300 w-full px-2 pt-6 pb-8 gap-7">
      <h1 className="text-black text-xl font-normal leading-7">
        Lista de Produtos
      </h1>

      {cart?.items.map(item => (
        <Product
          key={item.product.sku}
          image={item.product.imageObjects?.[0].small}
          description={item.product.name}
          price={item.product.priceSpecification?.price}
          discount={item.product.priceSpecification.discount}
          maxPrice={item.product.priceSpecification.maxPrice}
          hiddenPrices
        />
      ))}
    </div>
  );
}
