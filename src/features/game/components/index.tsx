import React from 'react';
import Labyrinth from 'features/common/components/Labyrinth';
import StatusBar from './StatusBar';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { Container, Button } from './index.styled';
import { isSameCell } from 'features/common/utils';
import { reset } from 'features/game/store';
import { setCurrentCell } from 'features/common/store/labyrinth';

const Game = () => {
  const { boardSize, currentCell, startCell, endCell } = useAppSelector(state => state.common.labyrinth);
  const { remainingMoves } = useAppSelector(state => state.game);
  const isWinner = isSameCell(currentCell, endCell);
  const isGameOver = remainingMoves === 0 || isWinner;
  const dispatch = useAppDispatch();

  return (
    <Container size={boardSize}>
      <Labyrinth freezedToken={isGameOver} />
      <StatusBar isWinner={isWinner} remainingMoves={remainingMoves} />
      {isGameOver ? (
        <Button
          onClick={() => {
            dispatch(setCurrentCell(startCell));
            dispatch(reset());
          }}
          marginTop={2}
        >
          Restart
        </Button>
      ) : null}
    </Container>
  );
};

export default Game;
