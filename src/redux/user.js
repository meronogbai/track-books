import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    age: null,
  },
});

export default userSlice.reducer;
