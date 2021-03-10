import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import userReducer from './user';
import titleReducer from './title';

export default configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    title: titleReducer,
  },
});
