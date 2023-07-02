import { object, string } from 'yup';

const schema = object({
  NODE_ENV: string().required().oneOf(['development', 'production', 'test']),
  CART_APP_URL: string().required(),
});

const ENV = {
  ...schema.validateSync({
    NODE_ENV: process.env.NODE_ENV,
    CART_APP_URL: process.env.CART_APP_URL,
  }),
};

export default ENV;
