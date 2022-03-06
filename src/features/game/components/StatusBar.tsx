import { Container, Text, Movements } from './StatusBar.styled';

interface StatusBarProps {
  isWinner: boolean;
  remainingMoves: number;
}

const StatusBar = (props: StatusBarProps): JSX.Element => {
  const { isWinner, remainingMoves } = props;

  return (
    <Container>
      <Text isSuccess={isWinner}>{isWinner ? 'You won' : remainingMoves === 0 && !isWinner ? 'You lost' : ''}</Text>
      <Movements>remaining moves {remainingMoves}</Movements>
    </Container>
  );
};

export default StatusBar;
