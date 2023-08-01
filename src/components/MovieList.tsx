import React, { FC, useMemo } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useAppSelector } from '../hooks';
import MovieCard from './MovieCard';
import { getFilteredMovies } from '../helpers';
import OrderButton from './OrderButton';

interface MovieListProps {

}

const MovieList: FC<MovieListProps> = () => {
  const movies = useAppSelector(state => state.movies)
  const yearRange = useAppSelector(state => state.yearRange)
  const programType = useAppSelector(state => state.programType)
  const nameFilter = useAppSelector(state => state.nameFilter)
  const order = useAppSelector(state => state.order)

  const renderMovies = useMemo(() => {
    const filteredMovies = getFilteredMovies({
      movies,
      yearRange,
      programType,
      nameFilter,
      order,
    })
    return filteredMovies?.map((movie) => 
      <Grid key={movie.title} item xs={12} sm={6} lg={4}>
        <MovieCard movie={movie}/>
      </Grid>
    )
  }, [
    movies,
    yearRange,
    programType,
    nameFilter,
    order,
  ])
  
  return (
    <>
      <Box 
        sx={{ 
          marginTop: (theme) => theme.spacing(3), 
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography variant='body2' sx={{ flexGrow: 1 }}>
          {`${renderMovies.length} movies found`}
        </Typography>
        <OrderButton />
      </Box>
      <Grid container spacing={2} sx={{ marginTop: (theme) => theme.spacing(1)}}>
        {renderMovies}
      </Grid>
    </>
  )
}

export default MovieList
