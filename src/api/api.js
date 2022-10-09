/**
 * Get mocked cart from {@link http://www.mocky.io/v2/5b15c4923100004a006f3c07 mocky.io}
 *
 * @returns {Promise<{
 *   id: string;
 *   items: {
 *     quantity: number;
 *     product: {
 *       sku: string;
 *       name: string;
 *       imageObjects: {
 *         featured: boolean;
 *         thumbnail: string;
 *         small: string;
 *         medium: string;
 *         large: string;
 *         extraLarge: string;
 *         valid: boolean;
 *       }[];
 *       priceSpecification: {
 *         sku: string;
 *         price: number;
 *         originalPrice: number;
 *         maxPrice: number;
 *         percent: number;
 *         discount: number;
 *       };
 *     };
 *   }[];
 *   subTotal: number;
 *   shippingTotal: number;
 *   discount: number;
 *   total: number;
 * }>} Cart object
 */

export const getCart = async () => {
  try {
    const response = await fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07');

    const items = await response.json();

    return items;
  } catch (error) {
    throw error;
  }
};
