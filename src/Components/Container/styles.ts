import { SxProps, styled } from "@mui/material";
import { List } from "react-admin";
import { isLightTheme } from "../../utils";

export const ListCustom = styled(List)(({ theme }) => ({
  marginTop: "2rem",
  "& .RaList-main > .MuiToolbar-root .MuiToolbar-root .MuiButtonBase-root": {
    color: isLightTheme(theme.palette.mode)
      ? "#1E2FA7"
      : theme.palette.secondary.contrastText,
  },
  "& .RaList-main > .MuiPaper-root": {
    background: "transparent",
    boxShadow: "none",
  },
  "& .RaLayout-contentWithSidebar": {
    background: "transparent",
    boxShadow: "none",
  },
}));

export const dataGridCustomStyles: SxProps = {
  width: "100%",
  '& .RaDatagrid-checkbox, & .MuiTableCell-paddingCheckbox, & .MuiTableHead-root': { display: "none" },
  '& .MuiTableCell-root': { padding: '0' },
  '& .RaDatagrid-tableWrapper': {
    minHeight: '600px',
  },
  '& .MuiTableBody-root': {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    paddingLeft: {
      xs: '2rem',
      sm: '0',
    },
    flexDirection: {
      xs: 'column',
      sm: 'row'
    }
  }
};
