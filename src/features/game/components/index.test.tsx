import Game from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import { configureStore } from '@reduxjs/toolkit';
import commonReducer from 'features/common/store';
import gameReducer from 'features/game/store';

describe('Game tests', () => {
  let Wrapper: JSX.Element;

  beforeEach(() => {
    const store = configureStore({
      reducer: {
        common: commonReducer,
        game: gameReducer
      }
    });

    Wrapper = (
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <Game />
        </Provider>
      </ThemeProvider>
    );
  });

  it('should win', () => {
    const textRegExp = /You won/i;

    render(Wrapper);

    const youWonElementBefore = screen.queryByText(textRegExp);
    expect(youWonElementBefore).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    const youWonElementAfter = screen.getByText(textRegExp);
    expect(youWonElementAfter).toBeInTheDocument();
  });

  it('should lose', () => {
    const textRegExp = /You lost/i;

    render(Wrapper);

    const youLostElementBefore = screen.queryByText(textRegExp);
    expect(youLostElementBefore).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    fireEvent.keyUp(document, { key: 'ArrowRight' });

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    fireEvent.keyUp(document, { key: 'ArrowLeft' });

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    fireEvent.keyUp(document, { key: 'ArrowLeft' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    fireEvent.keyDown(document, { key: 'ArrowDown' });
    fireEvent.keyUp(document, { key: 'ArrowDown' });

    const youLostElementAfter = screen.getByText(textRegExp);
    expect(youLostElementAfter).toBeInTheDocument();
  });
});
