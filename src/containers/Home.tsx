import React, { FC, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'
import { fetchMovies } from '../actions';
import { connect } from 'react-redux';
import { Container, Box } from '@mui/material'
import MovieList from '../components/MovieList';
import FilterSidebar from '../components/FiltersSidebar';

interface HomeProps {
  fetchData: () => void
}

const Home: FC<HomeProps> = ({ fetchData }) => {
  const { isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

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

  return (
    <Box
      sx={{ 
        backgroundColor: 'rgb(245 222 179 / 30%)', 
        paddingTop: '64px' 
      }}
    >
      <Container fixed >
        <FilterSidebar />
        <MovieList />
      </Container>
    </Box>
  )
}

const mapDispatchToProps = {
  fetchData: fetchMovies,
}

export default connect(null, mapDispatchToProps)(Home)
