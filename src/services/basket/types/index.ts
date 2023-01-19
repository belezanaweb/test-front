export type Basket = {
    items: Product[],
    shippingTotal: number,
    discount: number,
}

export type Product = {
    product: ProductBasketItems
}

export type ProductBasketItems = {
    name: string,
    priceSpecification: PriceSpecification,
    imageObjects: imageObjects[]
    sku: string;
}

export type PriceSpecification = {
    discount: number,
    maxPrice: number,
    originalPrice: number,
    percent: number,
    price: number,
    sku: string,
}

export type imageObjects = {
    extraLarge: string,
    large: string,
    medium: string,
    small: string,
    thumbnail: string,
}