import React,{useState} from "react";
import {useSelector} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./Views/Auth/Auth"
import MainView from "./Views/MainView";
import AppBar from "./Views/Components/appBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PriorityController from "./Controllers/priorityController";

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [priorityTheme, setPriorityTheme] = useState(null);
    const { Themecolor, BGcolor, Tcolor } = PriorityController(priorityTheme);
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
    <Router>
    <ThemeProvider theme={theme}>
     <AppBar />
       {!user ? <Auth /> : <MainView setPriorityTheme={setPriorityTheme} user={user} setUser={setUser}/> }
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
