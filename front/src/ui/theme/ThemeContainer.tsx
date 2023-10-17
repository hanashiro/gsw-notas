import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import lightTheme from './light-theme';
import darkTheme from './dark-theme';

const ThemeContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
