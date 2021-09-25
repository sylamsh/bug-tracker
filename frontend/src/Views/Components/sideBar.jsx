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

function DrawerElement({setPriorityTheme, setCurrentId}){
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

export default function ResponsiveDrawer({setPriorityTheme, setCurrentId, window}) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>  
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          <DrawerElement setPriorityTheme={setPriorityTheme} setCurrentId={setCurrentId}/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerElement setPriorityTheme={setPriorityTheme} setCurrentId={setCurrentId}/>
        </Drawer>
      </Box>
  );
}
