import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const cartUrl =
  serverRuntimeConfig.serviceCartUrl || publicRuntimeConfig.serviceCartUrl;

export const fetchCartProducts = async () => {
  try {
    const response = await fetch(cartUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch cart products.');
  }
};
