import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./Views/Login/login"
import MainView from "./Views/MainView";

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : 
      <>
        <MainView />
      </>}
    </Router>
  );
}

export default App;
