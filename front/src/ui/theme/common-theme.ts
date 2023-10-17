import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '1.75rem', // 28px
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.25rem', // 20px
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.125rem', // 18px
            fontWeight: 700,
        },
        h4: {
            fontSize: '1rem', // 16px
        },
        body1: {
            fontSize: '1rem', // 16px
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem', // 14px
            fontWeight: 300,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '.875rem',
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variant: 'body1',
                color: 'text.primary',
            },
        },
    },
});

export default theme;
