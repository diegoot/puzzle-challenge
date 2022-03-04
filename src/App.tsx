import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Setup from 'features/setup/components';
import Game from 'features/game/components';
import { defaultTheme } from './theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/setup" element={<Setup />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Navigate to="/setup" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
