import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getApi} from '../../service/api';

export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    const response = await getApi();
    return response;
  },
);

const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    product: [],
    loading: false,

    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategory.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        (state.loading = false),
          (state.category = action.payload),
          (state.error = null);
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default CategorySlice.reducer;
