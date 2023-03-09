import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Suisse Int", "sans-serif"].join(","),
    h1: {
      fontSize: "35px",
    },
    h2: {},
    h4: {
      fontSize: 15,
    },
    h5: {},
    h6: {},
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontSize: "16px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.button-style": {
            paddingTop: "10px",
            height: "50px",
            width: "250px",
            backgroundColor: "blue",
            paddingLeft: "30px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.text-field": {
            pl: 13,
            justifyContent: "center",
            margin: 5,
            width: "300px",
            alignContent: "center",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.login-page": {
            display: "-ms-grid",
            mx: "auto",
            height: "500px",
            backgroundColor: "white",
            border: 1,
            borderRadius: "4%",
            maxWidth: "400px",
            borderColor: "GrayText",
            marginTop: 1,
          },
          height: "92%",
          borderRadius: 0,
        },
      },
    },
  },
});

export const customizedTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontSize: 12,
    fontFamily: `Droid Serif`,
    h1: {
      fontSize: "35px",
    },
    h2: {},
    h3:{},
    h4: {
      fontSize: 15,
    },
    h5: {},
    h6: {},
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontSize: "16px",
    },
    subtitle1:{

    },
    subtitle2:{

    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.button-style": {
            paddingTop: "10px",
            height: "50px",
            width: "200px",
            paddingLeft: "30px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "darkblue",
          borderRadius: 2,
          border: 5,
          "&.text-field": {
            pl: 13,
            justifyContent: "center",
            margin: 5,
            width: "250px",
            alignContent: "center",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          height: "92%",
          borderRadius: 0,
          "&.login-page": {
            mx: "auto",
            height: "500px",
            border: 1,
            borderRadius: "4%",
            maxWidth: "400px",
            marginTop: 1,
          },
        },
      },
    },
  },
});
