import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const create = createAsyncThunk(
  'movies/create',
  async (addData, { rejectWithValue }) => {
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
    const { data } = await axios.delete(`/movies/${id}`);

    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }

    return { id, data };
  },
);

const update = createAsyncThunk(
  'movies/update',
  async ({ id, updateData }, { rejectWithValue }) => {
    const { data } = await axios.patch(`/movies/${id}`, updateData);

    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }

    return data.data;
  },
);

const getOne = createAsyncThunk(
  'movies/getOne',
  async (id, { rejectWithValue }) => {
    const { data } = await axios.get(`/movies/${id}`);

    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }

    return data.data;
  },
);

const getList = createAsyncThunk(
  'movies/getList',
  async (params, { rejectWithValue }) => {
    const { data } = await axios.get('/movies', {
      params: { ...params },
    });

    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }

    return data.data;
  },
);

const importFile = createAsyncThunk(
  'movies/importFile',
  async (file, { rejectWithValue }) => {
    const importFormData = new FormData();
    importFormData.append('movies', file);

    const { data } = await axios.post('/movies/import', importFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (data.status === 0) {
      return rejectWithValue(data.error.error.code);
    }

    return data.data;
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
