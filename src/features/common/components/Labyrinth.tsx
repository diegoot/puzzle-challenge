import React, { useEffect, useState } from 'react';
import { Board, Row, Cell, Token } from './Labyrinth.styled';
import useKeyPress from 'features/common/hooks/useKeyPress';
import { Coordinate } from 'features/common/types';
import { isValidCell, isRightCell, isBottomCell, isBlockedCell, isSameCell } from 'features/common/utils';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setCurrentCell, setStartCell } from 'features/common/store/labyrinth';

interface LabyrinthProps {
  configMode?: boolean;
  center?: boolean;
  freezedToken?: boolean;
}

const Labyrinth = (props: LabyrinthProps): JSX.Element => {
  const { configMode, center, freezedToken } = props;
  const { endCell, startCell, currentCell, boardSize, blockedCells } = useAppSelector(state => state.common.labyrinth);
  const [board, setBoard] = useState<Coordinate[][]>([]);
  const isArrowUp = useKeyPress('ArrowUp');
  const isArrowDown = useKeyPress('ArrowDown');
  const isArrowRight = useKeyPress('ArrowRight');
  const isArrowLeft = useKeyPress('ArrowLeft');
  const dispatch = useAppDispatch();

  const updateCoordinate = (shouldUpdate: boolean, targetCoordinate: Coordinate): void => {
    if (shouldUpdate && !freezedToken) {
      if (isValidCell(targetCoordinate, boardSize) && !isBlockedCell(targetCoordinate, blockedCells)) {
        dispatch(setCurrentCell(targetCoordinate));
      }
    }
  };

  useEffect(() => {
    const board: Coordinate[][] = new Array(boardSize).fill([]).map(() => new Array(boardSize).fill({ x: 0, y: 0 }));

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        board[i][j] = { x: j, y: boardSize - 1 - i };
      }
    }
    setBoard(board);
  }, []);

  useEffect(() => {
    const targetCoordinate = { x: currentCell.x, y: currentCell.y + 1 };
    updateCoordinate(isArrowUp, targetCoordinate);
  }, [isArrowUp]);

  useEffect(() => {
    const targetCoordinate = { x: currentCell.x, y: currentCell.y - 1 };
    updateCoordinate(isArrowDown, targetCoordinate);
  }, [isArrowDown]);

  useEffect(() => {
    const targetCoordinate = { x: currentCell.x + 1, y: currentCell.y };
    updateCoordinate(isArrowRight, targetCoordinate);
  }, [isArrowRight]);

  useEffect(() => {
    const targetCoordinate = { x: currentCell.x - 1, y: currentCell.y };
    updateCoordinate(isArrowLeft, targetCoordinate);
  }, [isArrowLeft]);

  return (
    <Board boardSize={boardSize} center={center}>
      <Token x={currentCell.x} y={currentCell.y} isVisible={!configMode} boardSize={boardSize} />
      {/* In this case it is ok to use the index as key because  we are not rendering any given information that */}
      {/* gets updated and must be identified to be updated. These are just rows and cells. */}
      {board.map((row, i) => (
        <Row key={i}>
          {row.map((cell, j) => (
            <Cell
              isRightCell={isRightCell(cell, boardSize)}
              isBottomCell={isBottomCell(cell)}
              isStartCell={isSameCell(cell, startCell)}
              isEndCell={isSameCell(cell, endCell)}
              isBlockedCell={isBlockedCell(cell, blockedCells)}
              key={j}
              onClick={() => {
                if (configMode && !isBlockedCell(cell, blockedCells)) dispatch(setStartCell(cell));
              }}
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default Labyrinth;
