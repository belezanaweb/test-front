interface ImageObject {
  thumbnail: string;
}

interface PriceSpecification {
  price: number;
}

interface Product {
  sku: string;
  name: string;
  imageObjects: ImageObject[];
  priceSpecification: PriceSpecification;
}

interface ProductBag {
  product: Product;
}
