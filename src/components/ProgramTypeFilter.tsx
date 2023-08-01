import React, { FC } from 'react'
import { Box, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setProgramType } from '../actions'

interface ProgramTypeFilter {

}

const ProgramTypeFilter: FC<ProgramTypeFilter> = () => {
  const storeProgramTypes = useAppSelector(state => state.programType)
  const dispatch = useAppDispatch()

  const handleCheckProgramType = (programType: string, isChecked: boolean) => {
    let newProgramTypes = storeProgramTypes.slice()
    if (isChecked) {
      newProgramTypes.push(programType)
    } else {
      newProgramTypes = storeProgramTypes.filter((pt) => pt !== programType)
    }

    dispatch(setProgramType(newProgramTypes))
  }

  return (
    <Box sx={{ padding: '16px 24px' }}>
      <FormGroup>
        <FormControlLabel 
          control={
            <Checkbox 
              checked={storeProgramTypes.includes('series')}
              onChange={(e, isChecked) => handleCheckProgramType('series', isChecked)}
              color='secondary'
            />
          } 
          label="Series" 
        />
        <FormControlLabel 
          control={
            <Checkbox
              checked={storeProgramTypes.includes('movie')} 
              onChange={(e, isChecked) => handleCheckProgramType('movie', isChecked)}
              color='secondary'
            />
          } 
          label="Movies" 
        />
      </FormGroup>
    </Box>
  )
}

export default ProgramTypeFilter