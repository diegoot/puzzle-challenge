import { configureStore } from '@reduxjs/toolkit';
import commonReducer from 'features/common/store';
import gameReducer from 'features/game/store';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    game: gameReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
