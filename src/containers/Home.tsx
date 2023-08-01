import React, { FC, useEffect, useMemo } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import { fetchMovies } from '../actions';
import { connect } from 'react-redux';
import { useAppSelector } from '../hooks';
import { Container, Grid, Box } from '@mui/material'
import MovieCard from '../components/MovieCard';

interface HomeProps {
  fetchData: () => void
}

const Home: FC<HomeProps> = ({ fetchData }) => {
  const { isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()
  const movies = useAppSelector(state => state.movies)

  useEffect(() => {
    // User not authenticated
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }

    // User authenticated
    if (isAuthenticated && !isLoading) {
      fetchData()
    }
  }, [isAuthenticated, isLoading])

  const renderMovies = useMemo(() => movies.map((movie) => 
    <Grid key={movie.title} item xs={12} sm={6} lg={4} >
      <MovieCard movie={movie}/>
    </Grid>
  ), [movies])

  return (
    <Box sx={{ backgroundColor: 'rgb(245 222 179 / 30%)' }}>
      <Container fixed >
        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          {renderMovies}
        </Grid>
      </Container>
    </Box>
  )
}

const mapDispatchToProps = {
  fetchData: fetchMovies,
}

export default connect(null, mapDispatchToProps)(Home)
