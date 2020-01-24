import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import mainReducer from './main/main.reducer';
import catalogReducer from './catalog/catalog.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  main: mainReducer,
  catalog: catalogReducer,
  product: productReducer,
  cart: cartReducer
});
