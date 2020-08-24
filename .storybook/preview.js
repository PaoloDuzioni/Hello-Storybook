import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/config/theme';
import 'typeface-lato';
import GlobalStyle from '../src/config/globalStyle';

addDecorator(Story => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
    </ThemeProvider>
));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true, hideNoControlsWarning: true },
};
