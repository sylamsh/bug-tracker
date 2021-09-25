import React,{useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { getBugs } from "../Controllers/actions/bugs";
import { getDevs } from '../Controllers/actions/auth';

//Components
import SideBar from './Components/sideBar';

//Pages
import ViewBugs from './Pages/viewBugs';
import BugForm from './Pages/bugForm';
import DashBoard from './Pages/dashBoard';

//MUI
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

export default function Main({setPriorityTheme}){
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getBugs());
      dispatch(getDevs())
  }, [dispatch, currentId]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <AppBar /> */}
        <SideBar  setPriorityTheme={setPriorityTheme}
                  setCurrentId={setCurrentId}/>
        <Box
          component="main"
          sx={{ flexGrow: 1,  p: 3 }}>
          <Toolbar />
          <Switch>
            <Route path="/viewBugs"><ViewBugs setPriorityTheme={setPriorityTheme}
                                              setCurrentId={setCurrentId}/>
            </Route>
            {user.result.role === "admin" && <Route path="/form"><BugForm setPriorityTheme={setPriorityTheme} 
                                                                          currentId={currentId}
                                                                          setCurrentId={setCurrentId}/>
            </Route>}
            <Route path="/" exact><DashBoard /></Route>
          </Switch>
        </Box>
      </Box>
    </>
  );
}


