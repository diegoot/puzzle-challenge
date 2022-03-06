import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Setup from 'features/setup/components';
import Game from 'features/game/components';
import { defaultTheme } from './theme';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/setup" element={<Setup />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Navigate to="/setup" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
