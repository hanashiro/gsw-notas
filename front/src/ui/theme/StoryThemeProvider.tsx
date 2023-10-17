import { ThemeProvider, styled } from '@mui/material';
import type { Decorator } from '@storybook/react';

import lightTheme from './light-theme';
import darkTheme from './dark-theme';

const ThemeBackground = styled('div')`
    background: ${({ theme }) => theme.palette.background.default};
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: ${({ theme }) => theme.spacing(2)};
    box-sizing: border-box;
`;

const ThemesContainer = styled('div')`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    overflow: auto;
`;

const StoryThemeProvider: Decorator = (StoryFn, context) => {
    const theme = context.parameters.theme || context.globals.theme;
    const showLightTheme = theme === 'light' || theme === 'side-by-side';
    const showDarkTheme = theme === 'dark' || theme === 'side-by-side';
    return (
        <ThemesContainer>
            {showLightTheme && (
                <ThemeProvider theme={lightTheme}>
                    <ThemeBackground>
                        <StoryFn />
                    </ThemeBackground>
                </ThemeProvider>
            )}

            {showDarkTheme && (
                <ThemeProvider theme={darkTheme}>
                    <ThemeBackground>
                        <StoryFn />
                    </ThemeBackground>
                </ThemeProvider>
            )}
        </ThemesContainer>
    );
};

export default StoryThemeProvider;
