import { Coordinate } from 'features/common/types';

export const isBlockedCell = (coodinate: Coordinate, blockedCells: Coordinate[]): boolean => {
  const { x, y } = coodinate;

  return !!blockedCells.find(cellCoordinate => cellCoordinate.x === x && cellCoordinate.y === y);
};

export const isValidCoordinate = (coordinate: Coordinate, boardSize: number): boolean => {
  const { x, y } = coordinate;

  return x >= 0 && x <= boardSize - 1 && y >= 0 && y <= boardSize - 1;
};
