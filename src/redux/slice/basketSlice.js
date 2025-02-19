import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    toggleBasket: (state, action) => {
      const product = action.payload;
      const existingItem = state.basket.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.basket.push({...product, quantity: 1});
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.basket.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.basket = state.basket.filter(
            item => item.id !== action.payload.id,
          );
        }
      }
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(item => item.id !== action.payload.id);
    },
  },
});

// Selector: Sepetteki toplam ürün sayısını hesapla
export const selectTotalItems = state =>
  state.basket.basket.reduce((total, item) => total + item.quantity, 0);

export const {toggleBasket, decreaseQuantity, removeFromBasket} =
  basketSlice.actions;
export default basketSlice.reducer;
