import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SORT_BY_TYPES } from '../../types';

export interface FilterSlice {
  value: {
    sortBy: string;
  };
}

const initialState: FilterSlice = {
  value: {
    sortBy: SORT_BY_TYPES.Popular,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.value.sortBy = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = filterSlice;
const { changeSortBy } = filterSlice.actions;

export {
  changeSortBy,
  reducer
};
