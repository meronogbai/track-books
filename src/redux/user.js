/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API_URL from '../constants/url';

export const authUser = createAsyncThunk(
  'user/auth',
  async ({ username, password, endpoint }) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
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
    const data = await response.json();
    if (!response.ok) throw new Error(data.failure);
    localStorage.setItem('token', data.jwt);
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
  reducers: {
    logout: () => ({
      loading: false,
      error: null,
      data: null,
    }),
  },
  extraReducers: {
    [authUser.pending]: state => {
      state.loading = true;
    },
    [authUser.rejected]: (state, action) => {
      state.loading = false;
      toast.error(action.error.message);
      state.error = action.error.message;
    },
    [authUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
