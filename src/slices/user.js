import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.AccessToken;
      state.user = action.payload.User;
    },
    logOut: (state) => {
      state.user = {};
      state.token = null;
      localStorage.removeItem('user');
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setCredentials, logOut, setToken } = userSlice.actions;
export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
