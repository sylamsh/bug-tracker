import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function appBarr() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Typography variant="h6" noWrap component="div">
                Bug Tracker
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default appBarr
