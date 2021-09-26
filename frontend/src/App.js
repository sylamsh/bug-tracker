import React,{useState} from "react";
import {useSelector} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./Views/Auth/Auth"
import MainView from "./Views/MainView";
import AppBar from "./Views/Components/appBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
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
            success : {
                main: '#80ed99',
                // #83b692 - dark sea green
            },
            info : {
                main: BGcolor,
            },
        },
    });

  return (
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <AppBar setUser={setUser}/>
                {!user ? <Auth setUser={setUser}/> : <MainView setPriorityTheme={setPriorityTheme} /> }
        </ThemeProvider>
    </Router>
    
  );
}

export default App;
