import styled from 'styled-components';
import { BOARD_SIZE } from '../constants';

const cellUnits = 6;
const tokenUnits = 4;

export const Board = styled.div`
  position: relative;
  width: ${props => props.theme.spacing * cellUnits * BOARD_SIZE}px;
  margin: 0 auto;
`;

export const Row = styled.div`
  height: ${props => props.theme.spacing * cellUnits}px;
`;

interface CellProps {
  isRightCell: boolean;
  isBottomCell: boolean;
  isStartCell: boolean;
  isEndCell: boolean;
}

export const Cell = styled.span<CellProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-right: ${props => (props.isRightCell ? `1px solid ${props.theme.palette.common.black}` : 'none')};
  border-bottom: ${props => (props.isBottomCell ? `1px solid ${props.theme.palette.common.black}` : 'none')};
  background-color: ${props => (props.isStartCell ? 'yellow' : props.isEndCell ? props.theme.palette.success : 'none')};
  width: ${props => props.theme.spacing * cellUnits}px;
  height: ${props => props.theme.spacing * cellUnits}px;
  text-align: center;
  box-sizing: border-box;
`;

export const Token = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing}px;
  left: ${props => props.theme.spacing}px;
  display: inline-block;
  width: ${props => props.theme.spacing * tokenUnits}px;
  height: ${props => props.theme.spacing * tokenUnits}px;
  border-radius: 50%;
  border: ${props => `4px solid ${props.theme.palette.common.black}`};
  background-color: ${props => props.theme.palette.common.white};
  box-sizing: border-box;
`;
