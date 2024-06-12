import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#3D5A5B", // primary main color
          contrastText: "#ffffff", // text color on primary background
        },
        secondary: {
          main: "#E09E50", // secondary main color
          contrastText: "#ffffff", // text color on secondary background
        },
        accent: {
          main: "#2F365F", // accent color
          contrastText: "#ffffff", // text color on accent background
        },
        background: {
          default: "#F7F1ED", // background color
          paper: "#ffffff", // paper color
        },
        text: {
          primary: "#2F365F", // primary text color
          secondary: "#3D5A5B", // secondary text color
          disabled: "#9e9e9e", // disabled text color
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#3D5A5B", // primary main color for dark mode
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#E09E50", // secondary main color for dark mode
          contrastText: "#ffffff",
        },
        accent: {
          main: "#2F365F", // accent color for dark mode
          contrastText: "#ffffff",
        },
        background: {
          default: "#121212", // dark background color
          paper: "#1d1d1d", // dark paper color
        },
        text: {
          primary: "#F7F1ED", // primary text color for dark mode
          secondary: "#9e9e9e", // secondary text color for dark mode
          disabled: "#616161", // disabled text color for dark mode
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "primary.main",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "secondary.main",
    },
    body1: {
      fontSize: "1rem",
      color: "text.primary",
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.text.secondary,
          "&:focus-within": {
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    JoySheet: {
      styleOverrides: {
        root: {
          margin: "1rem", // default margin for boxes
        },
      },
    },
    JoyBox: {
      styleOverrides: {
        root: {
          margin: "1rem", // default margin for boxes
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.variant === "h1" && {
            color: theme.palette.primary.main,
          }),
          ...(ownerState.variant === "h2" && {
            color: theme.palette.secondary.main,
          }),
          ...(ownerState.variant === "body1" && {
            color: theme.palette.text.primary,
          }),
        }),
      },
    },
  },
  fontFamily: {
    body: '"Roboto", sans-serif',
    display: '"Roboto", sans-serif',
    code: '"Roboto Mono", monospace',
  },
});

export default theme;
