import { ModelStore } from 'exredux';
import { ProductListModel } from './models/ProductListModel';
import { RouterModel } from './models/RouterModel';
import { CardModel } from './models/CardModel';

export const modelStore = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [ProductListModel, RouterModel, CardModel]
});
