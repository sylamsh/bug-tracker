import React,{ useState } from "react";
import { useSelector } from "react-redux";

//Components
import BugCard from "../Components/bugCard";
import BugView from "../Components/bugView";

//MUI
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ViewBugs({setPriorityTheme, setCurrentId}){
    const bugs = useSelector((state) => state.bugs);

    // Theme Controller
    const [displayBug, setDisplayBug] = useState(null);
    function BugClicked(_id, priority) {
      setDisplayBug(_id);
      setPriorityTheme(priority);
    }
    function CollapseView() {
      setDisplayBug(null);
      setPriorityTheme(null);
    }
    
    const classes = useStyles();
    return( 
      !bugs.length ? 
        <Grid container direction="row" alignItems="center" justifyContent="center" style={{height:"80vh"}}>
          <CircularProgress sx={{margin : "0 auto"}}/> 
        </Grid> : <Grid container justifyContent="space-between" spacing={2}>
              {bugs.map( (bug, key) => {
                  return (
                  <Grid item key={key} sm={12} md={6}>
                      {bug._id !== displayBug && <BugCard bug={bug} clicked={BugClicked}/>}
                      {bug._id === displayBug && <BugView bug={bug} 
                                                          collapse={CollapseView} 
                                                          setCurrentId={setCurrentId}
                                                          setPriorityTheme={setPriorityTheme}/>}
                  </Grid>
                );
              })}
          </Grid>
    )
}