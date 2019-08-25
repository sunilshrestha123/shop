import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReduer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/shop/shop-reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReduer,
  shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);
