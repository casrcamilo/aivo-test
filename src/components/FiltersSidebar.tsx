import React, { FC, useState } from 'react'
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

interface FilterSidebar {

}

const FilterSidebar: FC<FilterSidebar> = () => {
  const [yearFilterOpen, setYearFilterOpen] = useState(true)
  const [programTypeFilterOpen, setProgramTypeFilterOpen] = useState(true)

  return (
    <Drawer        
      variant="permanent"
      anchor="left"
      open={true}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
        },
      }}
    >
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
    </Drawer>
  )
}

export default FilterSidebar