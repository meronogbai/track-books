/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API_URL from '../constants/url';

export const getBooks = createAsyncThunk(
  'books/get',
  async token => {
    const response = await fetch(`${API_URL}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.books;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
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
});

export default booksSlice.reducer;
