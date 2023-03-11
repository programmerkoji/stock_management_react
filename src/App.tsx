import * as React from 'react';
import Button from '@mui/material/Button';
import Home from './pages/home/Home';
import { Login } from '@mui/icons-material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';


export default function MyApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <p>あああああああ</p>
    </ThemeProvider>
  );
}
