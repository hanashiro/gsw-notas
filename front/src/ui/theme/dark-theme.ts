import { createTheme } from '@mui/material';
import commonTheme from './common-theme';
import lightTheme from './light-theme';

const theme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'dark',
        primary: { main: '#65b2ff' },
        secondary: { main: '#f486c3' },
        success: { main: '#00b894' }, // teal
        error: { main: '#f948b4' },
        warning: { main: '#fdcb6e' }, // orange
        info: { main: '#00cec9' }, // green-blue
        text: {
            primary: '#fff',
            secondary: '#bcc2cd',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            default: '#24202e',
            paper: '#1f1f28',
        },
    },
});

export default theme;
