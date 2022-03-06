import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface TextProps {
  isSuccess: boolean;
}

export const Text = styled.div<TextProps>`
  align-self: flex-start;
  color: ${props => (props.isSuccess ? props.theme.palette.success : props.theme.palette.failure)};
  font-weight: bold;
`;

export const Movements = styled.div`
  align-self: flex-end;
`;
