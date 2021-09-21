import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function ApplicationBar(props) {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
            <Typography variant="h5" noWrap component="div" sx={{color:props.Tcolor}}>
                Bug Tracker
            </Typography>
            </Toolbar>
        </AppBar>
    )
}