import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

const create = createAsyncThunk(
  'movies/create',
  async (addData, { rejectWithValue }) => {
    const { data } = await axios.post('/movies', addData);

    if (data.status === 0) {
      toast.error('Something went wrong');
      return rejectWithValue(data.error.error.code);
    }

    toast.success('Movie successfully added');

    return data.data;
  },
);

const remove = createAsyncThunk(
  'movies/delete',
  async (id, { rejectWithValue }) => {
    const { data } = await axios.delete(`/movies/${id}`);

    if (data.status === 0) {
      toast.error('Something went wrong');
      return rejectWithValue(data.error.error.code);
    }

    toast.success('Movie successfully deleted');

    return id;
  },
);

const update = createAsyncThunk(
  'movies/update',
  async ({ id, updateData }, { rejectWithValue }) => {
    const { data } = await axios.patch(`/movies/${id}`, updateData);

    if (data.status === 0) {
      toast.error('Something went wrong');
      return rejectWithValue(data.error.error.code);
    }

    toast.success('Movie successfully updated');

    return data.data;
  },
);

const getOne = createAsyncThunk(
  'movies/getOne',
  async (id, { rejectWithValue }) => {
    const { data } = await axios.get(`/movies/${id}`);

    if (data.status === 0) {
      toast.error('Something went wrong');
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
      toast.error('Something went wrong');
      return rejectWithValue(data.error.error.code);
    }

    const items = data.data;
    const count = Number(data.meta.total);

    return { items, count };
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
      toast.error('Something went wrong');
      return rejectWithValue(data.error.error.code);
    }

    const items = data.data;
    const count = Number(data.meta.total);

    toast.success('Movies successfully added');

    return { items, count };
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
