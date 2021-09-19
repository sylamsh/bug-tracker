import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function appBarr() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{backgroundColor : "rgba(18, 78, 120, 1)"}}>
            <Toolbar>
            <Typography variant="h5" noWrap component="div" style={{color : "rgba(240, 240, 201, 1)"}}>
                Bug Tracker
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default appBarr
