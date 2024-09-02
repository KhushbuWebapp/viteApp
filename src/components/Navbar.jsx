import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const Navbar = ({ handlelogout, toggleval, settoggleval }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            settoggleval(!toggleval);
            console.log("done");
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {/* <Button color="inherit" onClick={handlelogout}>
          Logout
        </Button> */}
        <Tooltip title="LogOut">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handlelogout}
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
};

export default Navbar;
