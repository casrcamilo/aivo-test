import React, { FC } from 'react'
import { Box, TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setNameFilter } from '../actions'

interface NameFilterProps {

}

const NameFilter: FC<NameFilterProps> = () => {
  const nameFilter = useAppSelector(state => state.nameFilter)
  const dispatch = useAppDispatch()

  return (
    <Box sx={{ padding: '8px' }}>
      <TextField
        label="Name"
        value={nameFilter}
        color="secondary"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setNameFilter(event.target.value))
        }}
        size="small"
      />
    </Box>
  )
}

export default NameFilter
