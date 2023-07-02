import { object, string } from 'yup';

const schema = object({
  NODE_ENV: string().required().oneOf(['development', 'production', 'test']),
  API_URL: string().required(),
  PAYMENT_APP_URL: string().required(),
  CART_APP_URL: string().required(),
  INFORMATION_APP_URL: string().required(),
});

const ENV = {
  ...schema.validateSync({
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    PAYMENT_APP_URL: process.env.PAYMENT_APP_URL,
    CART_APP_URL: process.env.CART_APP_URL,
    INFORMATION_APP_URL: process.env.INFORMATION_APP_URL,
  }),
};

export default ENV;
