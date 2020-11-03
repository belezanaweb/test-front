import { atom } from 'recoil';

export const cartData = atom({
	key: 'cartData',
	default: {},
});

export const headerPage = atom({
	key: 'headerPage',
	default: 1,
});
export const userData = atom({
	key: 'userData',
	default: {},
});