import React, { FC, useMemo } from 'react'
import { Box, Slider, Grid, Typography } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks'
import { setYearRange } from '../actions'

interface YearFilterProps {

}

const YearFilter: FC<YearFilterProps> = () => {
  const movies = useAppSelector(state => state.movies)
  const yearRange  = useAppSelector(state => state.yearRange)
  const dispatch = useAppDispatch()

  const moviesYearRange = useMemo(() => {
    const years = movies
      .map(({ releaseYear }) => releaseYear)  // get the release year of every movie
      .sort()                                 // sort asc the years
      .filter((year) => year !== 0)           // filter by valid years
    
    // const uniqueYears = [...new Set(years)]   // remove duplicates

    // return the first and last year of array
    const range = [years[0], years[years.length - 1]]

    dispatch(setYearRange(range))
    return range
  }, [movies])

  const handleChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    dispatch(setYearRange(newValue as number[]))
  }

  return (
    <Box sx={{ padding: '16px 24px' }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={yearRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        min={moviesYearRange[0]}
        max={moviesYearRange[1]}
        color="secondary"
        aria-label="Small"
        size='small'
      />
      <Grid
        container
        spacing={1}
        sx={{ 
          '&>.MuiGrid-item': {
            paddingLeft: '4px' 
          }
        }}
      >
        <Grid item xs={6} sx={{ paddingLeft: '0' }}>
          <Typography variant='body2' >
            {moviesYearRange[0]}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ paddingLeft: '0' }}>
          <Typography variant='body2' align='right'>
            {moviesYearRange[1]}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default YearFilter
