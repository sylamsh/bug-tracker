import React from 'react'
import {Switch, Route} from "react-router-dom";

//Components
import AppBar from "./Components/appBar";
import SideBar from './Components/Side-bar/sideBar';

//Pages
import ViewBugs from './Pages/viewBugs';

//MUI
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import bugSlice from '../Controllers/Redux/bugSlice';

export default function DashBoard(){
  return (
    <Box sx={{ display: 'flex' }} style={{marginLeft : "-20vw"}}>
      <CssBaseline />
      <AppBar />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        
      >
        <Toolbar />
        <Switch>
          <Route path="/viewBugs"><ViewBugs/></Route>
        </Switch>
      </Box>
    </Box>
  );
}

