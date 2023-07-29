import React, { FC } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../ai-stream-logo.png'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const navigate = useNavigate()

  const handleNavigateToLogin = () => {
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar 
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between'
          }}>
          <Link to="/">
            <img 
              src={Logo} 
              alt="page logo"
              style={{ height: 60 }} 
            />
          </Link>
          <Button variant="contained" color="secondary" onClick={handleNavigateToLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
