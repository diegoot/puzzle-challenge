import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  isOver: boolean;
  isWinner: boolean;
  movementsLeft: number;
}

const initialState: GameState = {
  isOver: false,
  isWinner: false,
  movementsLeft: 10
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setIsOver: state => {
      state.isOver = true;
    },
    setIsWinner: state => {
      state.isWinner = true;
    },
    decreaseMovementsLeft: state => {
      state.movementsLeft -= 1;
    },
    reset: () => initialState
  }
});

export default gameSlice.reducer;
