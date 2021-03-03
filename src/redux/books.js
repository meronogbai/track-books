/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API_URL from '../constants/url';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async token => {
    const response = await fetch(`${API_URL}/books`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    extraReducers: {
      [getBooks.pending]: state => {
        state.loading = true;
      },
      [getBooks.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [getBooks.fulfilled]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
    },
  },
});

export default booksSlice.reducer;
