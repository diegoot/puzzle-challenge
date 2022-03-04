import React, { useEffect, useState } from 'react';
import { BOARD_SIZE } from 'features/common/constants';
import { Board, Row, Cell, Token } from './Labyrinth.styled';
import useKeyPress from 'features/common/hooks/useKeyPress';

type Coordinate = {
  x: number;
  y: number;
};

const Labyrinth = () => {
  const [board, setBoard] = useState<Coordinate[][]>([]);
  const isArrowUp = useKeyPress('ArrowUp');
  const isArrowDown = useKeyPress('ArrowDown');
  const isArrowRight = useKeyPress('ArrowRight');
  const isArrowLeft = useKeyPress('ArrowLeft');

  useEffect(() => {
    const board: Coordinate[][] = new Array(BOARD_SIZE).fill([]).map(() => new Array(BOARD_SIZE).fill({ x: 0, y: 0 }));

    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        board[i][j] = { x: j, y: BOARD_SIZE - 1 - i };
      }
    }

    setBoard(board);
  }, []);

  useEffect(() => {
    if (isArrowUp) console.log('** arrow up **');
  }, [isArrowUp]);

  useEffect(() => {
    if (isArrowDown) console.log('** arrow down **');
  }, [isArrowDown]);

  useEffect(() => {
    if (isArrowRight) console.log('** arrow right **');
  }, [isArrowRight]);

  useEffect(() => {
    if (isArrowLeft) console.log('** arrow left **');
  }, [isArrowLeft]);

  return (
    <Board onKeyDown={() => console.log('keyDown')}>
      <Token />
      {/* In this case it is ok to use the index as key because  we are not rendering any given information that */}
      {/* gets updated and must be identified to be updated. These are just rows and cells. */}
      {board.map((row, i) => (
        <Row key={i}>
          {row.map((cell, j) => (
            <Cell
              isRightCell={cell.x === BOARD_SIZE - 1}
              isBottomCell={cell.y === 0}
              isStartCell={cell.x === 0 && cell.y === BOARD_SIZE - 1}
              isEndCell={cell.x === BOARD_SIZE - 1 && cell.y === 0}
              key={j}
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default Labyrinth;
