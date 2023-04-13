import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            color: "white",
          },
        },
      },
    },
  },
});

const PageThemeProvider = (props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
