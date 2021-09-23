import React,{useState, useEffect} from 'react'
import {Switch, Route} from "react-router-dom";
import PriorityController from '../Controllers/priorityController';

//Redux
import { useDispatch } from "react-redux";
import { getBugs } from "../Controllers/actions/bugs";

//Components
import AppBar from "./Components/appBar";
import SideBar from './Components/sideBar';

//Pages
import ViewBugs from './Pages/viewBugs';
import BugForm from './Pages/bugForm';
import DashBoard from './Pages/dashBoard';

//MUI
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Main(){
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getBugs());
  }, [dispatch, currentId]);

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
        main: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar Tcolor={Tcolor}/>
        <SideBar  ChangePriorityTheme={ChangePriorityTheme} 
                  setCurrentId={setCurrentId}/>
        <Box
          component="main"
          sx={{ flexGrow: 1,  p: 3 }}>
          <Toolbar />
          <Switch>
            <Route path="/viewBugs"><ViewBugs ChangePriorityTheme={ChangePriorityTheme}
                                              setCurrentId={setCurrentId}/>
            </Route>
            <Route path="/form"><BugForm  ChangePriorityTheme={ChangePriorityTheme} 
                                          currentId={currentId}
                                          setCurrentId={setCurrentId}/>
            </Route>
            <Route path="/" exact><DashBoard /></Route>
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

