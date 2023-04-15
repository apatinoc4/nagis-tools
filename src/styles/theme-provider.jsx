import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkGray = "#292929";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `${darkGray}`,
          borderBottom: "2px solid white",
          ".MuiContainer-root": {
            margin: 0,
            width: "100%",
          },
          ".MuiStack-root": {
            marginLeft: 20,
          },
          ".MuiStack-root > a": {
            color: "white",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            textDecoration: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            "&.projectCard-tittle": {
              color: `${darkGray}`,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
            },
          },
          ".MuiCardActions-root": {
            "&.projectCard-actions": {
              background: `${darkGray}`,
              ".MuiButtonBase-root > a": {
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                textDecoration: "none",
              },
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          // account info inputs present in report-tool
          "&.report-tool-account-input": {
            ".MuiOutlinedInput-root": {
              background: "rgba(213, 235, 245, 0.3)",
              padding: 5,
              "&:hover fieldset": {
                borderColor: "#d5ebf5",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#d5ebf5",
              },
            },

            ".report-tool-label.Mui-focused": {
              background: "#d5ebf5",
              borderRadius: "4px",
              color: "#292929",
              padding: "0 5px",
              position: "absolute",
              left: "-2px",
            },
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
