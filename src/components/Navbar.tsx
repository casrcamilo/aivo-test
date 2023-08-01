import React, { FC } from "react";
import { Box, AppBar, Toolbar, IconButton, } from "@mui/material";
import { Menu } from '@mui/icons-material'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Logo from "../assets/ai-stream-logo.png";
import UserMenu from "./UserMenu";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setFilterSidebarOpen } from "../actions";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { isAuthenticated } = useAuth0()
  const isFilterSidebarOpen = useAppSelector(state => state.isFilterSidebarOpen)
  const dispatch = useAppDispatch()

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
            display: "flex",
            flex: 1,
          }}
        >
          {isAuthenticated && <IconButton
            color="inherit"
            edge="start"
            sx={{ 
              mr: 2, 
              width: 46, 
              display: { xs: 'block', xl: 'none' } 
            }}
            onClick={() => dispatch(setFilterSidebarOpen(!isFilterSidebarOpen))}
          >
            <Menu />
          </IconButton>}
          <Link to="/" style={{ flex: 1 }}>
            <img src={Logo} alt="page logo" style={{ height: 60 }} />
          </Link>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
