import React, { useState, MouseEvent } from "react";
import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  Paper,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Sort,
  Check,
  ArrowDownward,
  ArrowUpward,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from "../hooks";
import { setOrder } from "../actions"
import { ORDER_OPTIONS } from "../constants";

const OrderButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch()
  const orderFromStore = useAppSelector(state => state.order)

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetOrder = (newOrder: string) => {
    dispatch(setOrder(newOrder))
  }

  return (
    <>
      <Button
        color="secondary"
        variant="outlined"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<Sort />}
      >
        Order by
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Paper sx={{ width: 200, maxWidth: '100%' }}>
          <MenuList>
            {ORDER_OPTIONS.map(orderOption => (            
              <MenuItem key={orderOption} onClick={() => handleSetOrder(orderOption)}>
                <ListItemIcon>
                  {orderOption.includes('ASC') ? <ArrowUpward /> : <ArrowDownward />}
                </ListItemIcon>
                <ListItemText>{orderOption}</ListItemText>
                {orderFromStore === orderOption ? <Check /> : null}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Menu>
    </>
  );
};

export default OrderButton;
