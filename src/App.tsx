import {
  Box,
  CssBaseline, ThemeProvider
} from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import ActiveCustomTheme from "./components/active-custom-theme";
import LoginPage from "./pages/login-page";
import { customizedTheme, defaultTheme } from "./theme";

function App() {
  const [selectTheme, setSelectTheme] = useState<boolean>(false);

  const handleChangeValue = () => {
    setSelectTheme(!selectTheme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={!selectTheme ? defaultTheme : customizedTheme}>
        <CssBaseline />
        <Box sx={{height:"100vh"}}>
        <ActiveCustomTheme
          selectTheme={selectTheme}
          handleChangeValue={handleChangeValue}
        />
        <LoginPage />
{/* <DashBoard/> */}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
