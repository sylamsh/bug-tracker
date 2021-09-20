import React,{useState} from 'react'
import {Switch, Route} from "react-router-dom";
import PriorityController from '../Controllers/priorityController';

//Components
import AppBar from "./Components/appBar";
import SideBar from './Components/Side-bar/sideBar';

//Pages
import ViewBugs from './Pages/viewBugs';
import CreateBugIssue from './Pages/createBugIssue';

//MUI
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function DashBoard(){
  const [priorityTheme, setPriorityTheme] = useState(null);
  const ChangePriorityTheme = (value) => {
    setPriorityTheme(value);
  }
  const {Themecolor, BGcolor, Tcolor} = PriorityController(priorityTheme);
   const theme = createTheme({
    palette: {
      primary: {
        main: Themecolor,
        text: Tcolor,
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
        main: BGcolor,
      },
      warning : {
        main: '#f2bb05',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar />
        <SideBar ChangePriorityTheme={ChangePriorityTheme}/>
        <Box
          component="main"
          sx={{ flexGrow: 1,  p: 3 }}
        >
          <Toolbar />
          <Switch>
            <Route path="/viewBugs"><ViewBugs ChangePriorityTheme={ChangePriorityTheme} /></Route>
            <Route path="/create"><CreateBugIssue ChangePriorityTheme={ChangePriorityTheme} /></Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

