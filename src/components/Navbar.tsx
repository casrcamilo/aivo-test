import React, { FC } from "react";
import {
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from 'react-router-dom'
import Logo from '../assets/ai-stream-logo.png'
import UserMenu from "./UserMenu";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="primary" 
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar 
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between'
          }}
        >
          <Link to="/">
            <img 
              src={Logo} 
              alt="page logo"
              style={{ height: 60 }} 
            />
          </Link>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
