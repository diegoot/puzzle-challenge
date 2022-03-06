import React from 'react';
import Labyrinth from 'features/common/components/Labyrinth';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Title, SubTitle, Explanation, Button } from './index.styled';
import { useNavigate } from 'react-router-dom';

const localTheme = (theme: DefaultTheme) => ({
  ...theme,
  spacing: 5
});

const Setup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>Game configurations</Title>
      <Explanation marginBottom={2}>Change the parameters for your game and click start when you are ready to start</Explanation>
      <SubTitle>Start position</SubTitle>
      <Explanation>Click on a white cell to start there</Explanation>
      <ThemeProvider theme={localTheme}>
        <Labyrinth configMode />
      </ThemeProvider>
      <Button
        onClick={() => {
          navigate('/game');
        }}
        marginTop={2}
      >
        Start
      </Button>
    </>
  );
};

export default Setup;
