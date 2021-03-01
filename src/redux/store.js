import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import userReducer from './user';

export default configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});
