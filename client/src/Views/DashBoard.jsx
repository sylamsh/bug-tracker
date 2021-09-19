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
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#124e78',
    },
    secondary: {
      main: '#f0f0c9',
    },
    error: {
      main : "#6e0e0a"
    },
    success : {
      main: '#3f6c51',
      // #83b692 - dark sea green
    },
    info : {
      main: '#1e7dad',
    },
    warning : {
      main: '#f2bb05',
    },
  },
});

export default function DashBoard(){
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar />
        <SideBar />
        <Box
          component="main"
          sx={{ flexGrow: 1,  p: 3 }}
        >
          <Toolbar />
          <Switch>
            <Route path="/viewBugs"><ViewBugs/></Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

