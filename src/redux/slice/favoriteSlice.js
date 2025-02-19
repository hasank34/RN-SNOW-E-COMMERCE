import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [], // Favorilere eklenen ürünler
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const existingIndex = state.favorites.findIndex(
        item => item.id === product.id,
      );

      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1); // Ürün varsa kaldır
      } else {
        state.favorites.push(product); // Ürün yoksa ekle
      }
    },
  },
});

export const {toggleFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
