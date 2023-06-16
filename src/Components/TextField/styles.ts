import { SxProps, Theme } from "@mui/material";
import { isLightTheme } from "../../utils";

export const customStyles = ():object => (theme: Theme):SxProps => {
    return {
        '& .MuiInputBase-root': {
            color: isLightTheme(theme.palette.mode) ? '': theme.palette.primary.main,
        },
        '& .MuiInputBase-root:hover fieldset': {
            borderColor: isLightTheme(theme.palette.mode) ? '': theme.palette.primary.main,
        },
        '& .MuiInputBase-root.MuiFilledInput-root.Mui-disabled': {
            backgroundColor: '#cccccc26',
            color: 'red',
        },
        '& .MuiFormLabel-root.MuiInputLabel-root': {
            color: isLightTheme(theme.palette.mode) ? theme.palette.primary.dark : theme.palette.primary.main,
        },
        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
            color: isLightTheme(theme.palette.mode) ? theme.palette.primary.dark : theme.palette.primary.main,
        },
        '& .MuiInputBase-root.Mui-focused fieldset': {
            borderColor: isLightTheme(theme.palette.mode) ? theme.palette.primary.dark : theme.palette.primary.main,
        },
        '& .MuiInputBase-root fieldset': {
            borderColor: isLightTheme(theme.palette.mode) ? '': theme.palette.primary.main,
        },
    }
}