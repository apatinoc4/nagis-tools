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
