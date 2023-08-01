import React, { FC, useState, useMemo } from 'react'
import { Drawer, Toolbar, Box, List, ListItemIcon, ListItemText, ListItemButton, Collapse } from '@mui/material'
import {
  ExpandLess,
  ExpandMore,
  CalendarMonth,
  Theaters,
} from '@mui/icons-material'
import YearFilter from './YearFilter'
import ProgramTypeFilter from './ProgramTypeFilter'
import NameFilter from './NameFilter'
import { useAppSelector, useAppDispatch } from "../hooks";
import { setFilterSidebarOpen } from '../actions'

interface FilterSidebar {

}

const FilterSidebar: FC<FilterSidebar> = () => {
  const isFilterSidebarOpen = useAppSelector(state => state.isFilterSidebarOpen)
  const dispatch = useAppDispatch()
  const [yearFilterOpen, setYearFilterOpen] = useState(true)
  const [programTypeFilterOpen, setProgramTypeFilterOpen] = useState(true)

  const renderDrawer = useMemo(() => (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto', padding: '16px 0' }}>
        <NameFilter />
        <List disablePadding>
          <ListItemButton onClick={() => setYearFilterOpen(!yearFilterOpen)}>
            <ListItemIcon>
              <CalendarMonth />
            </ListItemIcon>
            <ListItemText primary={"Year"} />
            {yearFilterOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
        <Collapse in={yearFilterOpen} timeout="auto" unmountOnExit>
          <YearFilter />
        </Collapse>
        <List disablePadding>
          <ListItemButton onClick={() => setProgramTypeFilterOpen(!programTypeFilterOpen)}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary={"Program type"} />
            {programTypeFilterOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
        <Collapse in={programTypeFilterOpen} timeout="auto" unmountOnExit>
          <ProgramTypeFilter />
        </Collapse>
      </Box>
    </>

  ), [])

  return (
    <>
      <Drawer        
        variant="temporary"
        anchor="left"
        open={isFilterSidebarOpen}
        onClose={() => dispatch(setFilterSidebarOpen(false))}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', xl: 'none' },
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
      >
        {renderDrawer}
      </Drawer>
      <Drawer        
        variant="permanent"
        anchor="left"
        open={true}
        sx={{
          display: { xs: 'none', xl: 'block' },
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
      >
        {renderDrawer}
      </Drawer>
    </>
  )
}

export default FilterSidebar