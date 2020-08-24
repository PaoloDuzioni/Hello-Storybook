import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: ${({ theme }) => theme.typography.fontFamily} sans-serif;
    font-size: ${({ theme }) => theme.typography.baseFont};
    color: ${({ theme }) => theme.general.textColor};
    background: ${({ theme }) => theme.general.bgColor};
}
`;

export default GlobalStyle;
