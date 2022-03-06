import { createSlice } from '@reduxjs/toolkit';
import { setCurrentCell } from 'features/common/store/labyrinth';

interface GameState {
  remainingMoves: number;
}

const initialState: GameState = {
  remainingMoves: 10
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: {
    [setCurrentCell.type]: state => {
      state.remainingMoves -= 1;
    }
  }
});

export const { reset } = gameSlice.actions;

export default gameSlice.reducer;
