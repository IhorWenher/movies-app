import axios from 'axios';
import { userSelectors } from '../user';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:8000/api/v1';
axios.defaults.headers.common.Authorization = localStorage
  .getItem('persist:user')
  .split('"')[4];

const create = createAsyncThunk(
  'movies/create',
  async (addData, { rejectWithValue }) => {
    console.log(axios.defaults.headers);
    const { data } = await axios.post('/movies', addData);
    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }
    return data.data;
  },
);

const remove = createAsyncThunk(
  'movies/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/movies/${id}`);
      return { id, data };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const update = createAsyncThunk(
  'movies/update',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/movies/${id}`, updateData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const getOne = createAsyncThunk(
  'movies/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/movies/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const getList = createAsyncThunk(
  'movies/getList',
  async (params, { rejectWithValue }) => {
    const { data } = await axios.get('/movies', {
      params: {
        sort: params.sort,
        order: params.order,
        limit: params.limit,
        offset: params.offset,
      },
    });

    return data;

    //return rejectWithValue(error);
  },
);

const importFile = createAsyncThunk(
  'movies/importFile',
  async (file, { rejectWithValue }) => {
    try {
      const importFormData = new FormData();
      importFormData.append('movies', file);

      const { data } = await axios.post('/movies/import', file, {
        data: file,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  create,
  remove,
  update,
  getOne,
  getList,
  importFile,
};

export default operations;
