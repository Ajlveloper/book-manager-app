import { Box, Theme, styled } from "@mui/material";
import { AppBar } from "react-admin";
import { isLightTheme } from "../../utils";

export const AppBarCustom = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#1E2FA7',
    padding: '.5rem 0',
    color: '#fff'
}));

export const ImageContainer = styled(Box)(() => ({
    width: '50px',
    height: '50px',
})) as typeof Box;

export const Image = styled('img')(() => ({
    width: '100%',
    height: '100%'
}));

export const titleStyles = () => (theme:Theme) => {
    return {
        color: isLightTheme(theme.palette.mode) ? 'primary.main' : ''
    }
}