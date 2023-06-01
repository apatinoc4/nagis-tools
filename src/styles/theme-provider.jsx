import { ThemeProvider, createTheme } from "@mui/material/styles";

const containerBlue = "#d5ebf5";
const darkGray = "#292929";

const tooltip = "#6c6c6c";

// const wotvFire = "#e06d38";
// const wotvIce = "#3a3bc4";
// const wotvWind = "#54b62f";
// const wotVEarth = "#d7a75b";
// const wotvThunder = "#a09a26";
// const wotvLight = "#a8a899";
// const wotvDark = "#612c9e";

const shardilisBlue = "#baddef";
const shardilisGreen = "#8ca35e";
const shardilisPurple = "#75598f";
const shardilisYellow = "#c9af2e";

// const sunset1 = "#ffc300";
const sunset2 = "#ff5733";
const sunset3 = "#c70039";
const sunset4 = "#900c3f";
// const sunset5 = "#581845";
const fadedSunset = "#fff2f6";

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
          ".MuiToolbar-root": {
            "&.mobile": {
              justifyContent: "space-between",
              ".MuiButtonBase-root > .MuiSvgIcon-root": {
                transform: "scale(1.5)",
              },
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.report-tool-preview-button": {
            backgroundColor: darkGray,
            border: `3px solid ${containerBlue}`,
            color: "White",

            fontFamily: "Poppins, sans-serif",
            fontSize: 10,
            height: 60,
            paddingTop: 5,
            transform: "translateY(35px)",
            width: 60,
            p: {
              margin: 0,
              span: {
                fontSize: 12,
              },
            },
          },
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
          "&.unitCard-search": {
            backgroundColor: sunset3,
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
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
                "&:hover": {
                  fontSize: 15,
                },
              },
            },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          "&.unitCard-loading": {
            color: sunset3,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "&.unitCard-search": {
            ".MuiPaper-root": {
              padding: 30,

              ".m-unitSearch-closeButton": {
                ".MuiButtonBase-root > .MuiSvgIcon-root": {
                  color: darkGray,
                },
              },

              ".MuiDialogTitle-root": {
                color: darkGray,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: 34,
                paddingLeft: 0,
              },

              ".MuiList-root": {
                marginTop: 20,
                maxHeight: 500,
                overflow: "auto",

                ".MuiListItemButton-root.Mui-selected": {
                  backgroundColor: fadedSunset,
                },
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
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&.unit-availability": {
            ".MuiRadio-root.Mui-checked": {
              color: sunset3,

              "&.Mui-disabled": {
                color: "gray",
              },
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.unit-availability": {
            color: darkGray,
            fontFamily: "Poppins, sans-serif",
          },
          "&.Mui-focused": {
            color: darkGray,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "&.mobile-header-menu": {
            a: {
              color: darkGray,
              fontFamily: "Poppins, sans-serif",
              textDecoration: "none",
            },
            ".general-link": {
              fontWeight: 800,
              fontSize: 20,
            },
            ".tool-link": {
              transform: "scale(0.5),",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.searchBar": {
            ".MuiButtonBase-root > .MuiSvgIcon-root": {
              color: darkGray,
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.helper-tooltip": {
            color: tooltip,
            height: 18,
            marginLeft: 3,
          },
          "&.shardilis-icon": {
            height: 18,
            marginLeft: 5,
            "&.shardilis-green": {
              color: shardilisGreen,
            },
            "&.shardilis-blue": {
              color: shardilisBlue,
            },
            "&.shardilis-purple": {
              color: shardilisPurple,
            },
            "&.shardilis-yellow": {
              color: shardilisYellow,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ".MuiTabs-indicator": {
            backgroundColor: sunset3,
          },
          "&.unit-card-tabs": {
            margin: "15px 0",
            ".MuiButtonBase-root": {
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              "&.Mui-selected": {
                color: sunset3,
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
