import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardContent,
  Typography, 
  Button,
  CircularProgress,
} from '@mui/material'
import Logo from '../assets/ai-stream-logo.png'
import { useAuth0 } from "@auth0/auth0-react";

interface LoginProps {

}

const Login: FC<LoginProps> = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, isLoading])

  return (
    <Grid container sx={{ height: 'calc(100vh - 64px)', position: 'relative'}}>
      <div className='login-background'/>
      <div className='login-card-container'>
        <Card elevation={3} sx={{ height: '100%'}}>
          {isLoading && <div className="loading-container">
            <CircularProgress size={64} color="secondary" />
          </div>}
          {!isLoading && !isAuthenticated && <>
            <CardContent className='login-card-content'>
              <img 
                className='login-logo'
                src={Logo} 
                alt="page logo"
              />
              <Typography variant="body1" align="center">
                Welcome back, please login to your account to view the best movies
              </Typography>
              <Button 
                color="secondary" 
                variant="contained" 
                sx={{ margin: '0 auto'}}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </CardContent>
          </>}
        </Card>
      </div>
    </Grid>
  )
}

export default Login
