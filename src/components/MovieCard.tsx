import React, { FC } from 'react'
import { Movie } from '../reducers'
import { Card, CardHeader, CardContent, CardActionArea, Typography } from '@mui/material'

interface MovieCardProps {
  movie: Movie
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className='movie-card'>
      <CardActionArea>
        <CardHeader
          title={movie.title}
          subheader={`${movie.programType} - ${movie.releaseYear}`}
        />
        <CardContent>
          <Typography variant="body2">
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard