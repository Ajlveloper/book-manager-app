import { Box, Modal, SxProps, Theme, styled } from "@mui/material";
import { ListButton } from "react-admin";
import { isLightTheme } from "../../utils";

export const CustomModal = styled(Modal)(() => ({
    display: 'grid',
    placeItems: 'center',
}));

export const ModalChild = styled(Box)(({ theme }) => ({
    width: '500px',
    minHeight: '400px',
    height: '468px',
    // backgroundColor: 'red',
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '1rem',
    position: 'relative',
    '&:focus-visible': {
        outline: 'none'
    }
}));

export const CloseButton = styled(ListButton)(({ theme }) => ({
    color: isLightTheme(theme.palette.mode) ? theme.palette.primary.dark : theme.palette.primary.main,
    position: 'absolute',
    top: '4px',
    right: '4px',
    minWidth: 'initial',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '& svg.MuiSvgIcon-root': {
        fontSize: '2rem' 
    },
    '&, & *': {
        margin: '0',
        padding: '0',
    }
}));

export const customStylesform = ():object => ():SxProps => ({
    '& .RaCreate-main, & .RaCreate-card, & .RaEdit-main, & .RaEdit-card': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    '& .RaCreate-main .MuiToolbar-root, & .RaEdit-main .MuiToolbar-root': {
        backgroundColor: 'transparent',
        minHeight: 'initial',
    },
    '&, & .RaCreate-main, & .RaEdit-main, & .RaCreate-card, & .RaEdit-card, & .RaCreate-main form, & .RaEdit-main form': {
        height: '100%',
    },
    '& .RaCreate-noActions, & .RaEdit-noActions': {
        margin: '0'
    },
    '& .RaCreate-main form, & .RaEdit-main form': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    
})

export const toolbarCustomStyles = ():object => (theme: Theme):SxProps => ({
    justifyContent: 'space-between',
    
    
    
})

export const saveButtonCustomStyles = (isCreate:boolean):object => (theme: Theme):SxProps => ({
    backgroundColor: isLightTheme(theme.palette.mode) ? theme.palette.primary.dark : theme.palette.primary.main,
    color: '#fff',
    '&.Mui-disabled': {
        backgroundColor: '#ccc',
        color: '#fff'
    },
    width: isCreate ? '100%' : 'intitial'
})

export const updateButtonCustomStyles = ():object => (theme: Theme):SxProps => ({
    border: `solid 1px ${theme.palette.warning.main}`,
    padding: '6px 16px',
    height: '100%'
})