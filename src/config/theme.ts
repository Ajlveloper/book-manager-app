import { defaultTheme } from "react-admin"

export const darkTheme = {
    palette: {
        primary: {
            main: '#1E2FA7',
            shadow: '#1E2FA7',
            light:  '#EAEBF3',
        },
        warning: {
            main: '#d32f2f'
        },
        secondary: {
            main: '#EAEBF3',
            contrastText: '#fff',
        },
        mode: 'dark' as 'dark',
        components: {
            ...defaultTheme.components,
        }
    },
}

export const lightTheme = {
    palette: {
        primary: {
            main: '#EAEBF3',
            contrastText: '#fff',
            shadow: '#ccc',
            dark: '#1E2FA7',
            error: '#d32f2f'
        },
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#EAEBF3',
            contrastText: '#000',
        },
        background: {
            default: '#fcfcfe',
        },
        mode: 'light' as 'light',
    },
    components: {
        ...defaultTheme.components,
    }
}