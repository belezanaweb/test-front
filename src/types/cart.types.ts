
export interface ICartModel {
    id: string;
    items: ICartItemModel[],
    subTotal: number;
    shippingTotal: number;
    discount: number;
    total: number;
}

export interface ICartItemModel {
    quantity: number;
    product: {
        sku: string;
        name: string;
        imageObjects: ICartImageModel[];
        priceSpecification: ICartPriceModel;
    }
}

export interface ICartImageModel {
    featured: boolean;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    valid: boolean;
}

export interface ICartPriceModel {
    sku: string;
    price: number;
    originalPrice: number;
    maxPrice: number;
    percent: number;
    discount: number;
}

export interface ICartViewModel {
    items: ICartItemViewModel[],
    subTotal: number;
    shippingTotal: number;
    discount: number;
    total: number;
}

export interface ICartItemViewModel {
    quantity: number;
    product: {
        sku: string;
        name: string;
        imageObjects: ICartImageViewModel[];
        priceSpecification: ICartPriceViewModel;
    }
}

export interface ICartImageViewModel {
    thumbnail: string;
    small: string;
    valid: boolean;
}

export interface ICartPriceViewModel {
    sku: string;
    price: number;
    originalPrice: number;
    maxPrice: number;
    percent: number;
    discount: number;
}

export interface ICreditCart {
    cardNumber: string;
    cardName: string;
    expirationDate: string;
    cvv: string;
}