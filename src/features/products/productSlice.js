import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { search } from './productApi';

const initialState = {
    status: 'idle',
    result: {},
  };

export const searchProuct = createAsyncThunk(
  'product/search',
  async ({term, demo}) => {
    const response = await search(term, demo);
    return response;
  }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
      purgedata: (state) => {
        
      }
    },

    extraReducers: (builder) => {
      builder
        .addCase(searchProuct.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(searchProuct.fulfilled, (state, action) => {
          state.status = 'idle';
          state.result = action.payload;
        });
    },
})

export const { purgedata } = productSlice.actions;

export const selectStatus = (state) => state.product.status;
export const selectResult = (state) => state.product.result;

export default productSlice.reducer;