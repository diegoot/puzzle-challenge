import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coordinate } from 'features/common/types';

interface LabyrinthState {
  startCell: Coordinate;
  currentCell: Coordinate;
  endCell: Coordinate;
  boardSize: number;
  blockedCells: Coordinate[];
}

const BOARD_SIZE = 5;

const initialState: LabyrinthState = {
  startCell: {
    x: 0,
    y: BOARD_SIZE - 1
  },
  currentCell: {
    x: 0,
    y: BOARD_SIZE - 1
  },
  endCell: {
    x: BOARD_SIZE - 1,
    y: 0
  },
  boardSize: BOARD_SIZE,
  blockedCells: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 }
  ]
};

const labyrinthSlice = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    setStartCell: (state, action: PayloadAction<Coordinate>) => {
      state.startCell = action.payload;
      state.currentCell = action.payload;
    },
    setCurrentCell: (state, action: PayloadAction<Coordinate>) => {
      state.currentCell = action.payload;
    }
  }
});

export const { setCurrentCell, setStartCell } = labyrinthSlice.actions;

export default labyrinthSlice.reducer;
