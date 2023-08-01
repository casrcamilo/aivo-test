import React, { FC, useMemo } from 'react'
import { Grid } from '@mui/material'
import { useAppSelector } from '../hooks';
import MovieCard from './MovieCard';

interface MovieListProps {

}

const MovieList: FC<MovieListProps> = () => {
  const movies = useAppSelector(state => state.movies)

  const renderMovies = useMemo(() => movies.map((movie) => 
    <Grid key={movie.title} item xs={12} sm={6} lg={4} >
      <MovieCard movie={movie}/>
    </Grid>
  ), [movies])
  
  return (
    <Grid container spacing={2} sx={{ marginTop: 0 }}>
      {renderMovies}
    </Grid>
  )
}

export default MovieList
