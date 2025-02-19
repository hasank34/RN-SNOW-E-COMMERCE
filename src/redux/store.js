import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './slice/categorySlice';
import favoriteReducer from './slice/favoriteSlice';
import productReducer from './slice/productSlice';
import basketReducer from './slice/basketSlice';
const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    favorites: favoriteReducer,
    basket: basketReducer,
  },
});

export default store;
