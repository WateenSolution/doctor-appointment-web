import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { logo } from "../../utilities/images";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme, open }) => ({
  background: `transparent`,
  boxShadow: "none", // Remove the shadow effect
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const AuthHeader = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar style={{ margin: 15 }}>
          <div>
            <img height={"30%"} width={"30%"} src={logo} />
          </div>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
