export interface Basket {
    items: Product[],
    shippingTotal: number,
    discount: number,
    total: number,
    subTotal: number
}

export interface Product {
    product: ProductBasketItems
}

export interface ProductBasketItems {
    name: string,
    priceSpecification: PriceSpecification,
    imageObjects: imageObjects[],
    sku?: string;
}

export interface PriceSpecification {
    discount: number,
    maxPrice: number,
    originalPrice: number,
    percent: number,
    price: number,
    sku: string,
}

export interface imageObjects {
    extraLarge: string,
    large: string,
    medium: string,
    small: string,
    thumbnail: string,
}