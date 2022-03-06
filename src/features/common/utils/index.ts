import { Coordinate } from 'features/common/types';

export const isRightCell = (coordinate: Coordinate, boardSize: number) => {
  const { x } = coordinate;

  return x === boardSize - 1;
};

export const isBottomCell = (coordinate: Coordinate) => {
  return coordinate.y === 0;
};

export const isSameCell = (coordinate1: Coordinate, coordinate2: Coordinate) => {
  return coordinate1.x === coordinate2.x && coordinate1.y === coordinate2.y;
};

export const isBlockedCell = (coodinate: Coordinate, blockedCells: Coordinate[]): boolean => {
  const { x, y } = coodinate;

  return !!blockedCells.find(cellCoordinate => cellCoordinate.x === x && cellCoordinate.y === y);
};

export const isValidCell = (coordinate: Coordinate, boardSize: number): boolean => {
  const { x, y } = coordinate;

  return x >= 0 && x <= boardSize - 1 && y >= 0 && y <= boardSize - 1;
};
