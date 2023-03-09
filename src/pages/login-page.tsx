import { Box, Button, Paper, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

function LoginPage() {
  return (
    <>
      {/* <Paper> */}
        <Box
          sx={{
            display: "-ms-grid",
            mx: "auto",
            height: "500px",

            border: 1,
            borderRadius: "4%",
            maxWidth: "400px",
            borderColor: "GrayText",
            marginTop: 1,
          }}
        >
          <Typography
            variant="h1"
            style={{ textAlign: "center", margin: "10px" }}
          >
            Login Form
          </Typography>
          <Typography variant="h6" sx={{ borderSpacing: "1" }}>
            User Name
          </Typography>
          <TextField
            name="name"
            variant="outlined"
            className="text-field"
          ></TextField>
          <Typography variant="h6" sx={{ borderSpacing: "1" }}>
            Email ID
          </Typography>
          <TextField
            name="EmailId"
            variant="outlined"
            className="text-field"
          ></TextField>
          <Typography variant="h6" sx={{ borderSpacing: "1" }}>
            Mobile No
          </Typography>
          <TextField
            name="MobileNO"
            variant="outlined"
            className="text-field"
          ></TextField>

          <Typography variant="h6" sx={{ borderSpacing: "1" }}>
            Date-Of-Birth
          </Typography>
          <TextField
            id="date"
            name="DateOfBirth"
            type="date"
            defaultValue=""
            className="text-field"
          />
          <Box className="container" sx={{ mt: 2 }}>
            <Button variant="contained" className="button-style">
              Submit
            </Button>
          </Box>
        </Box>
      {/* </Paper> */}
    </>
  );
}

export default LoginPage;
