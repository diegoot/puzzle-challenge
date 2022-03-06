import styled from 'styled-components';
import { CELL_UNITS } from 'features/common/constants';

const tokenUnits = 4;

interface BoardProps {
  boardSize: number;
  center?: boolean;
}

export const Board = styled.div<BoardProps>`
  position: relative;
  width: ${props => props.theme.spacing * CELL_UNITS * props.boardSize}px;
  margin: ${props => (props.center ? '0 auto' : 0)};
`;

export const Row = styled.div`
  height: ${props => props.theme.spacing * CELL_UNITS}px;
`;

interface CellProps {
  isRightCell: boolean;
  isBottomCell: boolean;
  isStartCell: boolean;
  isEndCell: boolean;
  isBlockedCell: boolean;
}

export const Cell = styled.span<CellProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-right: ${props => (props.isRightCell ? `1px solid ${props.theme.palette.common.black}` : 'none')};
  border-bottom: ${props => (props.isBottomCell ? `1px solid ${props.theme.palette.common.black}` : 'none')};
  background-color: ${props =>
    props.isStartCell
      ? props.theme.palette.common.yellow
      : props.isEndCell
      ? props.theme.palette.success
      : props.isBlockedCell
      ? props.theme.palette.common.gray
      : 'none'};
  width: ${props => props.theme.spacing * CELL_UNITS}px;
  height: ${props => props.theme.spacing * CELL_UNITS}px;
  text-align: center;
  box-sizing: border-box;
`;

interface TokenProps {
  x: number;
  y: number;
  isVisible: boolean;
  boardSize: number;
}

export const Token = styled.span<TokenProps>`
  position: absolute;
  top: ${props => props.theme.spacing + props.theme.spacing * CELL_UNITS * (props.boardSize - 1 - props.y)}px;
  left: ${props => props.theme.spacing + props.theme.spacing * CELL_UNITS * props.x}px;
  display: ${props => (props.isVisible ? 'inline-block' : 'none')};
  width: ${props => props.theme.spacing * tokenUnits}px;
  height: ${props => props.theme.spacing * tokenUnits}px;
  border-radius: 50%;
  border: ${props => `4px solid ${props.theme.palette.common.black}`};
  background-color: ${props => props.theme.palette.common.white};
  box-sizing: border-box;
  transition: left 0.5s, top 0.5s;
`;
