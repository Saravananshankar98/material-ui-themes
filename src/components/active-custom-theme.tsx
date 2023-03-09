import { Box, Switch, Typography } from "@mui/material";

function ActiveCustomTheme({ selectTheme, handleChangeValue }: any) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h4" sx={{ paddingTop: "10px" }}>
        {selectTheme ? "Dark Theme" : "light Theme"}
      </Typography>
      <Switch checked={selectTheme} onChange={() => handleChangeValue()} />
    </Box>
  );
}

export default ActiveCustomTheme;
