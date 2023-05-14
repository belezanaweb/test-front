import { getCart } from "../api/get-cart.api";
import { ICartImageModel, ICartItemModel, ICartModel, ICartViewModel } from "../types/cart.types";

export async function getCartService(): Promise<ICartViewModel> {
    return new Promise<ICartViewModel>((resolve, reject) => {
        getCart()
            .then((response: ICartModel) => {
                resolve(cartModelToViewModel(response));
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export function cartModelToViewModel(model: ICartModel): ICartViewModel {
    return {
        items: model?.items?.map(({ product: { sku, name, imageObjects, priceSpecification }, quantity }: ICartItemModel) => {
            return {
                quantity: quantity,
                product: {
                    sku: sku,
                    name: name,
                    imageObjects: imageObjects?.map(({ thumbnail, small, valid }: ICartImageModel) => {
                        return {
                            thumbnail: thumbnail,
                            small: small,
                            valid: valid,
                        }
                    }),
                    priceSpecification: {
                        sku: priceSpecification.sku,
                        price: priceSpecification.price,
                        originalPrice: priceSpecification.originalPrice,
                        maxPrice: priceSpecification.maxPrice,
                        percent: priceSpecification.percent,
                        discount: priceSpecification.discount,
                    },
                }
            }
        }),
        subTotal: model.subTotal,
        shippingTotal: model.shippingTotal,
        discount: model.discount,
        total: model.total,
    } as ICartViewModel;
}

