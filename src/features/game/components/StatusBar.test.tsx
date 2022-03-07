import StatusBar from './StatusBar';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';

describe('StatusBar tests', () => {
  it('should render remaining moves', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <StatusBar isWinner={false} remainingMoves={10} />
        </Provider>
      </ThemeProvider>
    );
    const movesElement = screen.getByText(/remaining moves 10/i);
    expect(movesElement).toBeInTheDocument();
  });

  it('should not render either You won nor You lost message', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <StatusBar isWinner={false} remainingMoves={10} />
        </Provider>
      </ThemeProvider>
    );
    const youWonMessageElement = screen.queryByText(/You won/i);
    expect(youWonMessageElement).not.toBeInTheDocument();
    const youLostMessageElement = screen.queryByText(/You lost/i);
    expect(youLostMessageElement).not.toBeInTheDocument();
  });

  it('should render You won message', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <StatusBar isWinner={true} remainingMoves={2} />
        </Provider>
      </ThemeProvider>
    );
    const messageElement = screen.getByText(/You won/i);
    expect(messageElement).toBeInTheDocument();
  });

  it('should render You lost message', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
          <StatusBar isWinner={false} remainingMoves={0} />
        </Provider>
      </ThemeProvider>
    );
    const messageElement = screen.getByText(/You lost/i);
    expect(messageElement).toBeInTheDocument();
  });
});
