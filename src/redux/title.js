import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
  name: 'title',
  initialState: '',
  reducers: {
    changeTitle: (_state, action) => action.payload,
  },
});

export const { changeTitle } = titleSlice.actions;

export default titleSlice.reducer;
