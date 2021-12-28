import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'users/register',
  async (credentials, { rejectWithValue }) => {
    const { data } = await axios.post('/users', credentials);
    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }
    token.set(data.token);

    const user = {
      email: credentials.email,
    };

    return { data, user };
  },
);

const logIn = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    const { data } = await axios.post('/sessions', credentials);
    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }
    token.set(data.token);
    const user = {
      email: credentials.email,
    };
    return { data, user };
  },
);

const logOut = createAsyncThunk('user/logout', async () => {
  token.unset();
});

/* const fetchCurrentUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    const { data } = await axios.get('users/current');
    return data;
  },
);
 */
const operations = {
  register,
  logOut,
  logIn,
  /* fetchCurrentUser, */
};

export default operations;