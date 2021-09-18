import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./Views/Login/login"
import DashBoard from "./Views/DashBoard";

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : 
      <>
        <DashBoard />
      </>}
    </Router>
  );
}

export default App;
