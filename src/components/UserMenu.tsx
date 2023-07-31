import React, { FC, useState,  } from 'react'
import {
  Avatar,
  Typography,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Stack,
  CircularProgress,
} from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";

interface UserMenuProps {}

const UserMenu: FC<UserMenuProps> = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  if (!isAuthenticated && !isLoading) return null
  
  return (
    <>
      <Button color="secondary" variant="text" onClick={handleClick}>
        {isLoading && <div className="loading-container">
          <CircularProgress color="secondary" />
        </div>}
        {!isLoading && isAuthenticated &&
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="button">
              {user?.name}
            </Typography>
            <Avatar src={user?.picture} />
        </Stack>
        }
      </Button>
      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
    </>
  )
}

export default UserMenu
