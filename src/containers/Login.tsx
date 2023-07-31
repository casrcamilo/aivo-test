import React, { FC } from 'react'
import { 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
} from '@mui/material'
import Logo from '../assets/ai-stream-logo.png'
import { useAuth0 } from "@auth0/auth0-react";

interface LoginProps {

}

const Login: FC<LoginProps> = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Grid container sx={{ height: 'calc(100vh - 64px)', position: 'relative'}}>
      <div className='login-background'/>
      <div className='login-card-container'>
        <Card elevation={3} sx={{ height: '100%'}}>
          <CardContent sx={{ textAlign: "center" }}>
            <img 
              src={Logo} 
              alt="page logo"
              style={{ height: 100 }} 
            />
            <Typography variant="body1" align="center">
              Welcome back, please login to your account to view the best movies
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              color="secondary" 
              variant="contained" 
              sx={{ margin: '0 auto'}}
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  )
}

export default Login
