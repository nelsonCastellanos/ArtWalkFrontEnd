import React from 'react';
import {Box, Container, createTheme, ThemeProvider} from '@mui/material';
import {ColorModeContext} from './Context';
import Header from './components/header/Header.jsx';

/**
 * Export theme react
 * @return {JSX.Element}
 * @constructor
 */
export default function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
  );

  const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <Header/>
          <Container fixed>
            <h1> Hello world!</h1>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
