import { createSlice } from '@reduxjs/toolkit';
import operations from './user-operations';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: false,
};

/* За допомогою IMMER не відбувається мутування, тому
значення передаються по посиланню у slice-reduser. Виконав 
для user, у фільмах через набір редюсерів */

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [operations.register.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.data.token;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [operations.register.rejected](state, _) {
      state.isFetchingCurrentUser = false;
      state.error = true;
    },

    [operations.logIn.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.data.token;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
    },
    [operations.logIn.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.error = true;
    },

    [operations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [operations.fetchCurrentUser.request](state) {
      state.isFetchingCurrentUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
