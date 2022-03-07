import { isRightCell, isBottomCell, isSameCell, isBlockedCell, isValidCell } from '.';
import { Coordinate } from 'features/common/types';

const BOARD_SIZE = 5;
const BLOCKED_CELLS: Coordinate[] = [{ x: 0, y: 1 }];

describe('Utils tests', () => {
  describe('isRightCell function', () => {
    it('should return true', () => {
      const coordinate: Coordinate = { x: BOARD_SIZE - 1, y: 0 };
      expect(isRightCell(coordinate, BOARD_SIZE)).toBe(true);
    });
    it('should return false', () => {
      const coordinate: Coordinate = { x: BOARD_SIZE - 2, y: 0 };
      expect(isRightCell(coordinate, BOARD_SIZE)).toBe(false);
    });
  });

  describe('isBottomCell function', () => {
    it('should return true', () => {
      const coordinate: Coordinate = { x: 0, y: 0 };
      expect(isBottomCell(coordinate)).toBe(true);
    });
    it('should return false', () => {
      const coordinate: Coordinate = { x: 0, y: BOARD_SIZE - 1 };
      expect(isBottomCell(coordinate)).toBe(false);
    });
  });

  describe('isSameCell function', () => {
    it('should return true', () => {
      const coordinate1: Coordinate = { x: 0, y: 0 };
      const coordinate2: Coordinate = { x: 0, y: 0 };
      expect(isSameCell(coordinate1, coordinate2)).toBe(true);
    });
    it('should return false', () => {
      const coordinate1: Coordinate = { x: 0, y: 0 };
      const coordinate2: Coordinate = { x: 0, y: BOARD_SIZE - 1 };
      expect(isSameCell(coordinate1, coordinate2)).toBe(false);
    });
  });

  describe('isBlockedCell function', () => {
    it('should return true', () => {
      const coordinate: Coordinate = { x: 0, y: 1 };
      expect(isBlockedCell(coordinate, BLOCKED_CELLS)).toBe(true);
    });
    it('should return false', () => {
      const coordinate: Coordinate = { x: 0, y: 0 };
      expect(isBlockedCell(coordinate, BLOCKED_CELLS)).toBe(false);
    });
  });

  describe('isValidCell function', () => {
    it('should return true', () => {
      const coordinate: Coordinate = { x: 0, y: 1 };
      expect(isValidCell(coordinate, BOARD_SIZE)).toBe(true);
    });
    it('should return false', () => {
      const coordinate: Coordinate = { x: 0, y: 10 };
      expect(isValidCell(coordinate, BOARD_SIZE)).toBe(false);
    });
  });
});
