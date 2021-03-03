/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API_URL from '../constants/url';

export const signupUser = createAsyncThunk(
  'user/signup',
  async ({ username, password }) => {
    const response = await fetch(`${API_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  extraReducers: {
    [signupUser.pending]: state => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default userSlice.reducer;
