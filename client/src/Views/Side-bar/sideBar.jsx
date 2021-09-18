import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "../../Controllers/Redux/authSlice"
import './sideBar.css'

//MUI
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

const drawerWidth = 240;

export default () => {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);
    const SignOut = () =>{
        dispatch(signOut());
    }

    return (
       <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem>
                <Link to='/' >Dash Board</Link>
              </ListItem>
              {auth.admin && <ListItem>
                <Link to='/create' >Create</Link>
              </ListItem>}
              <ListItem>
                <Link to='/viewBugs' >View Bugs</Link>
              </ListItem>
          </List>
          <Divider />
            <List>
            <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="error"
                  sx={{ mt: 1, mb: 1}}
                  onClick={SignOut}>
                Logout
                </Button>
              </ListItem>
          </List>
        </Box>
      </Drawer>
    )
}
