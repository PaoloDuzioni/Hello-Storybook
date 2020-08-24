const theme = {
    colors: {
        white: '#ebeaea',
        black: '#000',
        default: () => theme.colors.white,
        primary: '#62198f',
        secondary: '#4285f4',
    },
    general: {
        bgColor: () => theme.colors.black,
        textColor: () => theme.colors.white,
    },
    typography: {
        fontFamily: 'Lato',
        baseFont: '16px',
    },
};

export default theme;
