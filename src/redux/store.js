import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
