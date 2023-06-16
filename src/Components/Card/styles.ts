import { Card, SxProps, Theme, styled } from "@mui/material";
import { isLightTheme } from "../../utils";
import { EditButton } from "react-admin";

export const CardCustom = styled(Card)(({ theme }: any) => ({
  width: "100%",
  maxWidth: "300px",
  minWidth: "300px",
  height: "250px",
  boxShadow: `1px 1px 5px ${theme.palette.primary.shadow}`,
  position: "relative",
})) as typeof Card;

export const iconStyles = () => (theme: Theme) => {
  return {
    color: isLightTheme(theme.palette.mode) ? "#1E2FA7" : "primary.main",
    fontSize: "5rem",
  };
};

export const EditButtonCustom = styled(EditButton)(({ theme }) => ({
  position: "absolute",
  bottom: "5px",
  right: "8px",
  width: "auto",
  padding: ".2rem",
  color: "primary.contrastText",
  minWidth: "initial",
  justifyContent: "center",
  borderRadius: "30%",
  "& .MuiButton-startIcon": { margin: "0" },
  '&, &:hover': {
      backgroundColor: isLightTheme(theme.palette.mode) ? theme.palette.secondary.main : '',
  }
}));


export const cardContentCustomStyles:SxProps = {
  display: 'flex',
  flexDirection: 'column'
} 
