import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
