import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { search } from './productApi';

const initialState = {
    status: 'idle',
  };

export const searchProuct = createAsyncThunk(
  'product/search',
  async () => {
    const response = await search();
    console.log(response);
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
        });
    },
})

export const { purgedata } = productSlice.actions;

export const selectStatus = (state) => state.product.status;

export default productSlice.reducer;