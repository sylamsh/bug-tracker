import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BugReportIcon from '@mui/icons-material/BugReport';
import MenuIcon from '@mui/icons-material/Menu';


export default function ApplicationBar({setUser}) {
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch()
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setUser(null)
  }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
        <Toolbar>
          <BugReportIcon
            fontSize="large"
            edge="start"
            color="inherit"
            sx={{ mr: 1 }}>
            <MenuIcon />
          </BugReportIcon>
          <Typography variant="h5" sx={{ flexGrow: 1, fontSize:"150%", color:"primary.text" }}>
            Bug Tracker
            <Typography sx={{color:"secondary.text", 
                            fontSize:"40%", verticalAlign:"top", 
                            letterSpacing:"0.16em", 
                            fontWeight:"bolder"}} variant="inline">
               &nbsp;{!user ? "" : (user.result.role === "admin" ? "ADMIN" : "DEV")}
            </Typography>
          </Typography>
          {user && <Button color="inherit" onClick={logout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    )
}

