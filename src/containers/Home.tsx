import React, { FC, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom'

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
  const { isAuthenticated, isLoading } = useAuth0()
  const navigate= useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading])

  return <div>
    Home
  </div>
}

export default Home
