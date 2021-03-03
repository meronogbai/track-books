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

export const addChapter = createAsyncThunk(
  'books/addChapter',
  async ({ token, book }) => {
    const response = await fetch(
      `${API_URL}/books/${book.id}?completed_chapters=${book.completed_chapters + 1}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data.book;
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
    [addChapter.pending]: state => {
      state.loading = true;
    },
    [addChapter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addChapter.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = state.data.map(book => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
    },
  },
});

export default booksSlice.reducer;
