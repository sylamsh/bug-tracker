import React from 'react'
import { Link } from "react-router-dom";
import './sideBar.css'

//MUI
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

export default function SideBar({setPriorityTheme, setCurrentId}){
    const user = JSON.parse(localStorage.getItem('profile'));
    const clickedOptions = () => {
      setPriorityTheme(null);
      setCurrentId(null);
    }

    return (
       <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: "info.main"},
        }}
      >
      <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <Divider />
            <List>
              <ListItem>
                <Typography sx={{color:"secondary.text"}} variant="h6" >
                  {user.result.userName}
                </Typography>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Link to='/' className="side-link" onClick={clickedOptions}>DashBoard</Link>
              </ListItem>
              {user.result.role === "admin" && <ListItem>
                <Link to='/form' className="side-link" onClick={clickedOptions}>Create Bug Issue</Link>
              </ListItem>} 
              <ListItem>
                <Link to='/viewBugs' className="side-link" onClick={clickedOptions}>View Bugs</Link>
              </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    )
}
