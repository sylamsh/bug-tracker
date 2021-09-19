import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function appBarr() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Typography variant="h5" noWrap component="div" style={{color : "white"}}>
                Bug Tracker
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default appBarr
