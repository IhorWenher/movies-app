import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import operations from './movies-operations';

const movies = createReducer(
  { items: [], count: 0 },
  {
    [operations.create.fulfilled]: (state, { payload }) => {
      return {
        items: [...state.items, payload],
        count: state.count + 1,
      };
    },
    [operations.remove.fulfilled]: (state, { payload }) => {
      return {
        items: state.items.filter(({ id }) => id !== payload),
        count: state.count - 1,
      };
    },

    [operations.update.fulfilled]: (state, { payload }) =>
      // eslint-disable-next-line array-callback-return
      state.items.find((el, idx) => {
        if (el._id === payload._id) {
          state.splice(idx, 1, payload);
        }
      }),
    [operations.getList.fulfilled]: (_, { payload }) => payload,
    [operations.importFile.fulfilled]: (state, { payload }) => {
      return {
        items: [...state.items, ...payload.items],
        count: payload.count,
      };
    },
  },
);

const oneMovie = createReducer(
  {},
  {
    [operations.getOne.fulfilled]: (_, { payload }) => payload,
  },
);

const loading = createReducer(false, {
  [operations.create.pending]: () => true,
  [operations.create.fulfilled]: () => false,
  [operations.create.rejected]: () => false,

  [operations.remove.pending]: () => true,
  [operations.remove.fulfilled]: () => false,
  [operations.remove.rejected]: () => false,

  [operations.update.pending]: () => true,
  [operations.update.fulfilled]: () => false,
  [operations.update.rejected]: () => false,

  [operations.getOne.pending]: () => true,
  [operations.getOne.fulfilled]: () => false,
  [operations.getOne.rejected]: () => false,

  [operations.getList.pending]: () => true,
  [operations.getList.fulfilled]: () => false,
  [operations.getList.rejected]: () => false,

  [operations.importFile.pending]: () => true,
  [operations.importFile.fulfilled]: () => false,
  [operations.importFile.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.create.rejected]: (_, { payload }) => payload,
  [operations.create.fulfilled]: () => null,

  [operations.remove.rejected]: (_, { payload }) => payload,
  [operations.remove.fulfilled]: () => null,

  [operations.update.rejected]: (_, { payload }) => payload,
  [operations.update.fulfilled]: () => null,

  [operations.getOne.rejected]: (_, { payload }) => payload,
  [operations.getOne.fulfilled]: () => null,

  [operations.getList.rejected]: (_, { payload }) => payload,
  [operations.getList.fulfilled]: () => null,

  [operations.importFile.rejected]: (_, { payload }) => payload,
  [operations.importFile.fulfilled]: () => null,
});

const moviesReducers = combineReducers({
  movies,
  oneMovie,
  loading,
  error,
});

export default moviesReducers;
