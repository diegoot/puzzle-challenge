import styled from 'styled-components';
import { CELL_UNITS } from 'features/common/constants';

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.theme.spacing * CELL_UNITS * props.size}px;
  margin: 0 auto;
  text-align: center;
`;

interface ButtonProps {
  marginTop?: number;
}

export const Button = styled.button<ButtonProps>`
  margin-top: ${props => (props.marginTop ? props.theme.spacing * props.marginTop : 0)}px;
`;
