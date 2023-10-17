import { createTheme } from '@mui/material';
import commonTheme from './common-theme';

const theme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'light',
        primary: { main: '#295cd9' },
        secondary: { main: '#da2aa9' },
        success: { main: '#62b36d' },
        error: { main: '#da2aa9' },
        warning: { main: '#ffa000' },
        info: { main: '#295cd9' },
        text: {
            primary: '#16181C',
            secondary: '#646E7A',
        },
        divider: '#E2E5F0',
        background: {
            paper: '#FFF',
            default: '#f7f7f8',
        },
    },
});

export default theme;
