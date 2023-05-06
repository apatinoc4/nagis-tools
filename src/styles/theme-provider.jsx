import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkGray = "#292929";

const sunset1 = "#ffc300";
const sunset2 = "#ff5733";
const sunset3 = "#c70039";
const sunset4 = "#900c3f";
const sunset5 = "#581845";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: darkGray,
          borderBottom: "2px solid white",
          height: 64,
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
    MuiButton: {
      styleOverrides: {
        root: {
          "&.unitPlanner-button": {
            margin: "5px 0",
            width: 180,

            "&.add-unit:not(.Mui-disabled)": {
              backgroundColor: sunset2,
            },
            "&.remove-unit:not(.Mui-disabled)": {
              backgroundColor: sunset4,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&.projectCard": {
            margin: 10,
            maxWidth: 400,
            ".MuiCardContent-root": {
              minHeight: 175,
              height: 195,
              "&.mobile": {
                height: 280,
              },
            },
          },
          ".MuiTypography-root": {
            "&.projectCard-tittle": {
              color: darkGray,
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
            },
          },
          ".MuiCardActions-root": {
            "&.projectCard-actions": {
              background: darkGray,
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
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          ".MuiPickersCalendarHeader-root": {
            ".MuiButtonBase-root > .MuiSvgIcon-root": {
              color: darkGray,
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
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&.unit-availability": {
            ".MuiRadio-root.Mui-checked": {
              color: sunset3,
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: darkGray,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ".MuiTabs-indicator": {
            backgroundColor: sunset4,
          },
          "&.unit-card-tabs": {
            margin: "15px 0",
            ".MuiButtonBase-root": {
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              "&.Mui-selected": {
                color: sunset4,
              },
            },
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
          "&.unit-card-input": {
            marginBottom: 20,
            ".MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: darkGray,
              },
            },
            ".Mui-focused": {
              color: darkGray,
            },
            ".MuiInputBase-input": {
              color: darkGray,
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
