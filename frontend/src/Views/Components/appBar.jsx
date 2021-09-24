import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function ApplicationBar() {
  const user =  {
    result : {role : null, name:"Mr.Dummy"}
  }

  const dispatch = useDispatch()
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontSize:"145%", color:"primary.text" }}>
            Bug Tracker
            <Typography sx={{color:"secondary.text", 
                            fontSize:"40%", verticalAlign:"top", 
                            letterSpacing:"0.18em", 
                            fontWeight:"bolder"}} variant="inline">
               &nbsp;{user.result.role === null ? "" : (user.result.role === "admin" ? "ADMIN" : "DEV")}
            </Typography>
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    )
}

