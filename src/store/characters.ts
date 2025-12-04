import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICharacterState {
  currentPage: number;
  filterName: string;
}

const initialState: ICharacterState = {
  currentPage: 1,
  filterName: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilterName: (state, action: PayloadAction<string>) => {
      state.filterName = action.payload;
      state.currentPage = 1;
    },
  },
});

export const { setPage, setFilterName } = charactersSlice.actions;

export default charactersSlice.reducer;
